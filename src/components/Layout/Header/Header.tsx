import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng); 
        cookies.set('i18next', lng); 
        document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'; 
    };
    
    const NavBarStyles = ({ isActive }: { isActive: boolean }) => {
        return {
            color: isActive ? "white" : "#b5b7ed",
            fontWeight: isActive ? "bold" : "normal",

        };
    };
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img src="./src/assets/img/onextralogo.png" alt="onextrapixel logo" />
            </div>
            <nav className={style.navbar}>
                <ul className={style[`navbar-desktop`]}>
                    <li><NavLink style={NavBarStyles} to={'/'} >{t("home")}</NavLink></li>
                    <li><NavLink style={NavBarStyles} to={'/add-blog'}>{t('addNewBlog')}</NavLink></li>
                </ul>
                <div className={style[`navbar-mobile`]}>
                    <button className={style.dropbutton}>
                        <img width="20px" height="20px" src="./src/assets/img/bars-menu.svg" />
                    </button>
                    <div className={style[`dropdown-list`]}>
                        <a href="#">CATEGORIES</a>
                        <a href="#">DEALS</a>
                        <a href="#">ABOUT</a>
                        <a href="#">ADVERTISE</a>
                    </div>
                </div>
                
            </nav>
            <div className={style.changelang}>
                    <select
                        onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}
                        className={style.dropbuttonlng}
                    >
                        <option value="en">English</option>
                        <option value="ar">العربية</option>
                    </select>
            </div>      
        </header>
    );
};

export default Header;
