import { useForm } from 'react-hook-form';
import style from './AddNewBlog.module.css';
import { useNavigate } from 'react-router-dom';
import { addBlog } from '../../services/service';
import { useTranslation } from 'react-i18next';

type FormData = {
    image: string;
    title: string;
    description: string;
};

const AddNewBlog = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ mode: 'all' });
    const navigate = useNavigate();
    const { t , i18n } = useTranslation();
    
    const AddBlog = async (data: FormData) => {
        try {
            const currentLanguage = i18n.language || 'en';
            await addBlog({ ...data, language: currentLanguage });
            console.log('Blog added:', data);
        
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
                    ? t('titleValidation.patternArabic')
                    : t('descriptionValidation.patternArabic');
            }
        } else {
            if (isTitle && !isEnglishTitle.test(value)) {
                return t('titleValidation.pattern');
            }
            if (!isTitle && !isEnglishDescription.test(value)) {
                return t('descriptionValidation.pattern');
            }
        }
        return true;
    };
    
    return (
        <div className={style.form}>
            <h2>{t('addBlogHeader')}</h2>
            <form onSubmit={handleSubmit(AddBlog)} >  
                <div>
                    <label>{t('imageLabel')}:</label>
                    <input
                        type="text"
                        {...register('image', { 
                            required:  t('imageValidation.required') as string,
                            pattern: {
                                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/,
                                message: t('imageValidation.pattern') as string,
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
                            required:  t('titleValidation.required') as string,
                            validate: (value) => validateInput(value, true),

                        })}
                        placeholder={t('titlePlaceholder') as string}
                        
                    />
                    {errors.title && <p className={style.error}>{errors.title.message}</p>}
                </div>
                <div>
                    <label>{t('descriptionLabel')}</label>
                    <textarea
                        {...register('description', {
                            required:  t('descriptionValidation.required') as string,
                            validate: (value) => validateInput(value, false),
                            minLength:{
                                value: 5,
                                message: t('descriptionValidation.minLength') as string,
                            },
                            maxLength: {
                                value: 1000,
                                message: t('descriptionValidation.maxLength') as string,
                            },
                        })}
                        placeholder={t('descriptionPlaceholder') as string}
                    ></textarea>
                    {errors.description && <p className={style.error}>{errors.description.message}</p>}
                </div>
                <button type="submit" className={style.button}>{t('submitButton')}</button>
            </form>
        </div>
    );
};

export default AddNewBlog;
