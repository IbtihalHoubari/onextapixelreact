import axios from 'axios';

const BASE_URL = 'http://localhost:3000/blogs';
export const getBlogs = async () => {
  try {
    const response = await axios.get(BASE_URL);

    const allBlogs = response.data;

    if (typeof allBlogs !== 'object' || !allBlogs.en || !allBlogs.ar) {
      throw new Error('Unexpected data format from server');
    }

    const blogsByLanguage = {
      en: Array.isArray(allBlogs.en) ? allBlogs.en : [],
      ar: Array.isArray(allBlogs.ar) ? allBlogs.ar : [],
    };

    return blogsByLanguage;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return { en: [], ar: [] }; 
  }
};

export const addBlog = async (data: { image: string; title: string; description: string, language: string }) => {
  try {
    const response = await axios.get(BASE_URL);
    const blogs = response.data;
    const newBlog = {
      id: Date.now().toString(),
      image: data.image,
      title: data.title,
      description: data.description,
    };

    if (data.language === 'en') {
      blogs.en.unshift(newBlog); 
    } else if (data.language === 'ar') {
      blogs.ar.unshift(newBlog);
    }

    const updateResponse = await axios.put(BASE_URL, blogs);
    return updateResponse.data;
  } catch (error) {
    console.error('Error adding blog:', error);
    throw error;
  }
};
