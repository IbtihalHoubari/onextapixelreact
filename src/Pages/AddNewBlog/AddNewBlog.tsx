import { useForm } from 'react-hook-form';
import style from './AddNewBlog.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import BlogsServices from '../../services/blogs-service';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

type FormData = {
    image: string;
    title: string;
    description: string;
};

const AddNewBlog = () => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>({ mode: 'all' });
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const { blogData } = location.state || {};

    useEffect(() => {
        if (blogData) {
            setValue('image', blogData.image);
            setValue('title', blogData.title);
            setValue('description', blogData.description);
        }
    }, [blogData, setValue]);

    const AddBlog = async (data: FormData) => {
        try {
            const currentLanguage = i18n.language || 'en';

            if (blogData) {
                await BlogsServices.updateBlog(currentLanguage, blogData.id, data);
                console.log('Blog updated:', data);
            } else {
                await BlogsServices.addBlog(currentLanguage, data);
                console.log('Blog added:', data);
            }
            reset();
            navigate('/');
        } catch (error) {
            console.error('Error adding blog:', error);
        } finally {

        }
    };

    const validateInput = (value: string, isTitle: boolean) => {
        const isArabic = /^[\u0621-\u064A\u0660-\u0669\s]+$/;
        const isEnglishTitle = /^[A-Z][a-zA-Z\s]+$/;
        const isEnglishDescription = /^[a-zA-Z0-9\s]+$/;

        if (i18n.language === 'ar') {
            if (!isArabic.test(value)) {
                return isTitle
                    ? t('titleValidationPatternArabic')
                    : t('descriptionValidationpatternArabic');
            }
        } else {
            if (isTitle && !isEnglishTitle.test(value)) {
                return t('titleValidationPattern');
            }
            if (!isTitle && !isEnglishDescription.test(value)) {
                return t('descriptionValidationpattern');
            }
        }
        return true;
    };

    return (
        <div className={style.form}>
            <h2>{blogData ? t('editBlogHeader') : t('addBlogHeader')}</h2>
            <form onSubmit={handleSubmit(AddBlog)} >
                <div>
                    <label>{t('imageLabel')}:</label>
                    <input
                        type="text"
                        {...register('image', {
                            required: t('imageValidationRequired') as string,
                            pattern: {
                                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/,
                                message: t('imageValidationPattern') as string,
                            },
                        })}
                        placeholder={t('imagePlaceholder')}
                    />
                    {errors.image && <p className={style.error}>{errors.image.message}</p>}

                </div>
                <div>
                    <label>{t('titleLabel')}</label>
                    <input
                        type="text"
                        {...register('title', {
                            required: t('titleValidationRequired') as string,
                            validate: (value) => validateInput(value, true),
                            maxLength: {
                                value: 50,
                                message: t('titleValidationMaxLength') as string,
                            },

                        })}
                        placeholder={t('titlePlaceholder') as string}

                    />
                    {errors.title && <p className={style.error}>{errors.title.message}</p>}
                </div>
                <div>
                    <label>{t('descriptionLabel')}</label>
                    <textarea
                        {...register('description', {
                            required: t('descriptionValidationrequired') as string,
                            validate: (value) => validateInput(value, false),
                            minLength: {
                                value: 5,
                                message: t('descriptionValidationminLength') as string,
                            },
                            maxLength: {
                                value: 1000,
                                message: t('descriptionValidationmaxLength') as string,
                            },
                        })}
                        placeholder={t('descriptionPlaceholder') as string}
                    ></textarea>
                    {errors.description && <p className={style.error}>{errors.description.message}</p>}
                </div>
                <button type="submit" className={style.button}>
                    {blogData ? t('updateButton') : t('submitButton')}
                </button>
            </form>
        </div>
    );
};

export default AddNewBlog;
