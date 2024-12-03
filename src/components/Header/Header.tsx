import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <img src="./src/assets/img/onextralogo.png" alt="onextrapixel logo" />
            </div>
            <nav className={style.navbar}>
                <ul className={style[`navbar-desktop`]}>
                    <li><a href="#" className={style.active}>CATEGORIES</a></li>
                    <li><a href="#">DEALS</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">ADVERTISE</a></li>
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
        </header>
    );
};

export default Header;
