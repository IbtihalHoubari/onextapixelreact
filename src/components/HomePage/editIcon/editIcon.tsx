import style from './editIcon.module.css'

type EditIconProps = {
  onClick: () => void;
};

const EditIcon = ({ onClick } : EditIconProps) => {
  return (
    <img className={style.editIcon} src="./src/assets/img/edit.svg" onClick={onClick} alt="Edit icon" />
  );
};

export default EditIcon;
