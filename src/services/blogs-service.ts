import axios from 'axios';

const BASE_URL = 'http://localhost:3000/blogs';

class BlogsServices {
  static async getBlogs() {
    try {
      const response = await axios.get(BASE_URL);
      const allBlogs = response.data;

      const blogsByLanguage = {
        en: Array.isArray(allBlogs.en) ? allBlogs.en : [],
        ar: Array.isArray(allBlogs.ar) ? allBlogs.ar : [],
      };

      return blogsByLanguage;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return { en: [], ar: [] }; 
    }
  }

  static async addBlog(data: { image: string; title: string; description: string; language: string }) {
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
  }
  static async updateBlog(id: string, data: { image: string; title: string; description: string; language: string }) {
    try {
      const response = await axios.get(BASE_URL);
      const blogs = response.data;

      const blogIndex = blogs[data.language].findIndex((blog: any) => blog.id === id);

      blogs[data.language][blogIndex] = {
        ...blogs[data.language][blogIndex],
        ...data,
      };

      const updateResponse = await axios.put(BASE_URL, blogs);
      return updateResponse.data;
    } catch (error) {
      console.error('Error updating blog:', error);
      throw error;
    }
  }

  static async deleteBlog(id: string, language: string) {
    try {
      const response = await axios.get(BASE_URL);
      const blogs = response.data;
  
      blogs[language] = blogs[language].filter((blog: any) => blog.id !== id);
  
      const updateResponse = await axios.put(BASE_URL, blogs);
      return updateResponse.data;
    } catch (error) {
      console.error('Error deleting blog:', error);
      throw error;
    }
  }
  
  
}
export default BlogsServices
