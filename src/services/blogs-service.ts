import axios from "axios";

interface Blog {
    id: string;
    image: string;
    title: string;
    description: string;
}

class BlogsServices  {
   
    static getBlogs = async (language: string) => {
        try {
            const response = await axios.get(`http://localhost:3000/${language}`);
            return response.data || [];
        } catch (error) {
            console.error(`Error fetching blogs for Language (${language}):`, error);
            return [];
        }
    };

    static async addBlog(
        language: string,
        data: { image: string; title: string; description: string }
      ): Promise<Blog | null> {
        try {
          const newBlog = {
            id: Date.now().toString(),
            ...data,
          };
          const response = await axios.post(
            `http://localhost:3000/${language}`,
            newBlog
          );
          return response.data;
        } catch (error) {
          console.error(`Error adding blog for Language (${language}):`, error);
          return null;
        }
      }

      static async updateBlog(
        language: string,
        id: string,
        data: { image: string; title: string; description: string }
      ): Promise<boolean> {
        try {
          await axios.put(`http://localhost:3000/${language}/${id}`, data);
          return true;
        } catch (error) {
          console.error(`Error updating blog ${id} for Language (${language}):`, error);
          return false;
        }
      }
      static async deleteBlog(language: string, id: string): Promise<boolean> {
        try {
          await axios.delete(`http://localhost:3000/${language}/${id}`);
          return true;
        } catch (error) {
          console.error(`Error deleting blog ${id} for Language (${language}):`, error);
          return false;
        }
      }
}

export default BlogsServices;
