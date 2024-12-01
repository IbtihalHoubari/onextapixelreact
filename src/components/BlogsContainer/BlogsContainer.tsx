import './BlogsContainer.css';
import BlogCard from '../BlogsCard';

const BlogsContainer = () => {
    const blogs = [
        {
            image: "./src/assets/img/angular-templates.png",
            title: "15+ Best Angular Admin Dashboard Templates of 2020 – Users Choice",
            description: "We have compiled a list of best Angular templates for you..."
        },
        {
            image: "./src/assets/img/google-fonts.png",
            title: "30 Beautiful Google Fonts for Your Website",
            description: "Finding attractive, user-friendly, legible fonts for your website..."
        },
        {
            image: "./src/assets/img/design-thinking.png",
            title: "Design Thinking 101 for Designers",
            description: "Creativity doesn’t just happen. The most inspired and innovative teams..."
        },
        {
            image: "./src/assets/img/angular-templates.png",
            title: "15+ Best Angular Admin Dashboard Templates of 2020 – Users Choice",
            description: "We have compiled a list of best Angular templates for you..."
        },
        {
            image: "./src/assets/img/google-fonts.png",
            title: "30 Beautiful Google Fonts for Your Website",
            description: "Finding attractive, user-friendly, legible fonts for your website..."
        },
        {
            image: "./src/assets/img/design-thinking.png",
            title: "Design Thinking 101 for Designers",
            description: "Creativity doesn’t just happen. The most inspired and innovative teams..."
        }
    ];

    return (
        <div className="blogs-container">
            {blogs.map((blog, index) => (
                <BlogCard 
                    key={index} 
                    image={blog.image} 
                    title={blog.title} 
                    description={blog.description} 
                />
            ))}
        </div>
    );
};

export default BlogsContainer;

