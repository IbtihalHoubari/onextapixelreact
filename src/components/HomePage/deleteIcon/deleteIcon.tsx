import style from './deleteIcon.module.css'

type DeleteIconProps = {
  onClick: () => void;
};

const DeleteIcon = ({ onClick } : DeleteIconProps) => {
  return (
    <img className={style.deleteicon} src="./src/assets/img/trash.svg" onClick={onClick} alt="Delete icon" />
  );
};

export default DeleteIcon;
