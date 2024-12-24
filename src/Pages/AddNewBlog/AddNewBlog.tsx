import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import style from './AddNewBlog.module.css';
import { useNavigate } from 'react-router-dom';

type FormData = {
    image: string;
    title: string;
    description: string;
};

const AddNewBlog = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const navigate = useNavigate();

    const onSubmit = async (data: FormData) => {
        try {
            await axios.post('http://localhost:3000/blogs', data);
            alert('Blog added successfully!');
            reset();
            navigate('/');
        } catch (error) {
            console.error('Error adding blog:', error);
            alert('Failed to add the blog. Please try again.');
        }
    };

    return (
        <div className={style.container}>
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        {...register('image', { required: 'Image is required' })}
                        placeholder="Enter image URL"
                    />
                    {errors.image && <p className={style.error}>{errors.image.message}</p>}
                </div>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        {...register('title', { required: 'Title is required' })}
                        placeholder="Enter title"
                    />
                    {errors.title && <p className={style.error}>{errors.title.message}</p>}
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        {...register('description', { required: 'Description is required' })}
                        placeholder="Enter description"
                    ></textarea>
                    {errors.description && <p className={style.error}>{errors.description.message}</p>}
                </div>
                <button type="submit" className={style.button}>Add Blog</button>
            </form>
        </div>
    );
};

export default AddNewBlog;
