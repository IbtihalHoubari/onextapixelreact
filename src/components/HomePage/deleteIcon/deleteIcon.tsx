import style from './deleteIcon.module.css'

type DeleteIconProps = {
  onClick: () => void;
};

const DeleteIcon = ({ onClick } : DeleteIconProps) => {
  return (
    <img className={style.deleteIcon} src="./src/assets/img/trash.svg" onClick={onClick} alt="Delete Icon" />
  );
};

export default DeleteIcon;
