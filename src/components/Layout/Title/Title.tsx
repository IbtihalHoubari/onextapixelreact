import style from './Title.module.css';
import { useTranslation } from 'react-i18next';

const Title = () => {
    const {t } = useTranslation();
    return (
        <h1 className={style.title}>{t('mainTitle')}</h1>
    );
};

export default Title;
