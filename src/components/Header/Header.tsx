import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="./src/assets/img/onextralogo.png" alt="onextrapixel logo" />
            </div>
            <nav className="navbar">
                <ul className="navbar-desktop">
                    <li><a href="#" className="active">CATEGORIES</a></li>
                    <li><a href="#">DEALS</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">ADVERTISE</a></li>
                </ul>
                <div className="navbar-mobile">
                <button className="dropbutton">
                    <img width="20px" height="20px" src="./src/assets/img/bars-menu.svg" />
                </button>
                <div className="dropdown-list">
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
