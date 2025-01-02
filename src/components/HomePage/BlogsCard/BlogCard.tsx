import styles from './BlogCard.module.css';
import { useTranslation } from 'react-i18next';

interface BlogCardProps {
    image: string;
    title: string;
    description: string;
}

const BlogCard = ({ image, title, description }: BlogCardProps) => {
    return (
        <div className={styles['blogs-card']}>
            <img className={styles.image} src={image} alt={title} />
            <div className={styles.details}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BlogCard;
