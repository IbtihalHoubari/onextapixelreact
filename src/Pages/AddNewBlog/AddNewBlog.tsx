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
    const { t, i18n } = useTranslation();
    
    const AddBlog = async (data: FormData) => {
        try {
            await addBlog(data);
            reset();
            navigate('/');
        } catch (error) {
            console.error('Error adding blog:', error);
            
        }
    };
    
    return (
        <div className={style.form}>
            <h2>{t('form.addBlogHeader')}</h2>
            <form onSubmit={handleSubmit(AddBlog)} >  
                <div>
                    <label>{t('form.imageLabel')}:</label>
                    <input
                        type="text"
                        {...register('image', { 
                            required:  t('form.imageValidation.required') as string,
                            pattern: {
                                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/,
                                message: t('form.imageValidation.pattern') as string,
                            },
                         })}
                        placeholder={t('form.imagePlaceholder') as string}
                    />
                    {errors.image && <p className={style.error}>{errors.image.message}</p>}

                </div>
                <div>
                    <label>{t('form.titleLabel')}</label>
                    <input
                        type="text"
                        {...register('title', {
                            required:  t('form.titleValidation.required') as string,
                            pattern: {
                                value: /^[A-Z][a-zA-Z\s]+$/,
                                message: t('form.titleValidation.pattern') as string,
                            },
                        })}
                        placeholder={t('form.titlePlaceholder') as string}
                        
                    />
                    {errors.title && <p className={style.error}>{errors.title.message}</p>}
                </div>
                <div>
                    <label>{t('form.descriptionLabel')}</label>
                    <textarea
                        {...register('description', {
                            required:  t('form.descriptionValidation.required') as string,
                            pattern: {
                                value: /^[a-zA-Z0-9\s]+$/,
                                message: t('form.descriptionValidation.pattern') as string,
                            },
                            minLength:{
                                value: 5,
                                message: t('form.descriptionValidation.minLength') as string,
                            },
                            maxLength: {
                                value: 1000,
                                message: t('form.descriptionValidation.maxLength') as string,
                            },
                        })}
                        placeholder={t('form.descriptionPlaceholder') as string}
                    ></textarea>
                    {errors.description && <p className={style.error}>{errors.description.message}</p>}
                </div>
                <button type="submit" className={style.button}>{t('form.submitButton')}</button>
            </form>
        </div>
    );
};

export default AddNewBlog;
