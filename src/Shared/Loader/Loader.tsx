import style from './Loader.module.css'
import { useTranslation } from 'react-i18next';


export default function Loader() {
  const {t} = useTranslation();

  return(
    <div className={style.loader}>
        <div data-testid="spinner" className={style.spinner}></div>
        <p>{t('loader')}</p>
    </div>
  )
  
}


