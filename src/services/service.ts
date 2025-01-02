import axios from 'axios';

const BASE_URL = 'http://localhost:3000/blogs';

export const getBlogs = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error; 
  }
};

export const addBlog = async (data: { image: string; title: string; description: string }) => {
  try {
    const response = await axios.post(BASE_URL, data);
    return response.data;
  } catch (error) {
    console.error('Error adding blog:', error);
    throw error;
  }
};
