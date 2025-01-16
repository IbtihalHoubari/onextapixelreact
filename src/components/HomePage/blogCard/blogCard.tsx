import DeleteIcon from '../deleteIcon';
import EditIcon from '../editIcon';
import styles from './blogCard.module.css'

interface BlogCardProps {
    image: string;
    title: string;
    description: string;
    onEdit: () => void;
    onDelete: () => void;
}

const BlogCard = ({ image, title, description, onEdit, onDelete }: BlogCardProps) => {
    return (
        <div className={styles.blogsCard}>
            <img className={styles.image} src={image} alt={title} />
            <div className={styles.details}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className={styles.icons} >
                <EditIcon onClick={onEdit} />
                <DeleteIcon onClick={onDelete} />
            </div>
        </div>
    );
};

export default BlogCard;