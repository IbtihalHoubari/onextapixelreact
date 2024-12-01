import './BlogCard.css';

interface BlogCardProps {
    image: string;
    title: string;
    description: string;
}

const BlogCard = ({ image, title, description }: BlogCardProps) => {
    return (
        <div className="blogs-card">
            <img className="image" src={image} alt={title} />
            <div className="details">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BlogCard;
