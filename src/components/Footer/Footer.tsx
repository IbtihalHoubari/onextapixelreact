import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles[`footer-start`]}>
                <img src="./src/assets/img/onextralogo.png" alt="onextrapixel logo" />
                <div className={styles.icons}>
                    <a href="#"><img src="./src/assets/img/facebok.svg" alt="facebook" /></a>
                    <a href="#"><img src="./src/assets/img/Twitter.svg" alt="Twitter" /></a>
                    <a href="#"><img src="./src/assets/img/linkedin.svg" alt="linkedin" /></a>
                    <a href="#"><img src="./src/assets/img/instagram.svg" alt="instagram" /></a>
                </div>
            </div>
            <ul className={styles[`footer-end`]}>
                <li><a href="#">CATEGORIES</a></li>
                <li><a href="#">DEALS</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">ADVERTISE</a></li>
            </ul>
        </footer>
    );
};

export default Footer;
