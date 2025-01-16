import i18n from '../i18n';
import BlogsServices from '../services/blogs-service';

const dataLoader = async () => {
    try {
        const language = i18n.language || 'en';
        const blogs = await BlogsServices.getBlogs(language);
        return { blogs, language };
    } catch (error) {
        console.error('Error in loader:', error);
        return { blogs: [], language: i18n.language || 'en' };
    }
}
export default dataLoader