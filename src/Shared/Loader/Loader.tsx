import style from './Loader.module.css'


export default function Loader() {

  return(
    <div className={style.loader}>
        <div className={style.spinner}></div>
        <p>Loading blogs...</p>
    </div>
  )
  
}


