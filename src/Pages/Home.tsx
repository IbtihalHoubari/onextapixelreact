import style from './Home.module.css';
import BlogCard from '../components/BlogsCard';

const Home = () => {
    const blogs = [
        {
            image: "./src/assets/img/angular-templates.png",
            title: "15+ Best Angular Admin Dashboard Templates of 2020 – Users Choice",
            description: "We have compiled a list of best Angular templates for you. These offer you to start your web application and help you build a powerful and practical administration panel…."
        },
        {
            image: "./src/assets/img/google-fonts.png",
            title: "30 Beautiful Google Fonts for Your Website",
            description: "Finding attractive, user-friendly, legible fonts for your website isn’t always easy,but Google Fonts, launched in 2010, helps solve that problem. Having started small,the directory now includes more…"
        },
        {
            image: "./src/assets/img/design-thinking.png",
            title: "Design Thinking 101 for Designers",
            description: "Creativity doesn’t just happen. The most inspired and innovative teams and individualdesigners need to be a part of a culture that enables forward-thinking,acceleration, and efficiency. It’s a…"
        },
        {
            image: "./src/assets/img/angular-templates.png",
            title: "15+ Best Angular Admin Dashboard Templates of 2020 – Users Choice",
            description: "We have compiled a list of best Angular templates for you. These offer you to start your web application and help you build a powerful and practical administration panel…."
        },
        {
            image: "./src/assets/img/google-fonts.png",
            title: "30 Beautiful Google Fonts for Your Website",
            description: "Finding attractive, user-friendly, legible fonts for your website isn’t always easy,but Google Fonts, launched in 2010, helps solve that problem. Having started small,the directory now includes more…"
        },
        {
            image: "./src/assets/img/design-thinking.png",
            title: "Design Thinking 101 for Designers",
            description: "Creativity doesn’t just happen. The most inspired and innovative teams and individualdesigners need to be a part of a culture that enables forward-thinking,acceleration, and efficiency. It’s a…"
        }
    ];

    return (
        <div className={style[`blogs-container`]}>
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

export default Home;
