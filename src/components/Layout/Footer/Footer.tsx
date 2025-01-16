import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerStart}>
                <img src="./src/assets/img/onextralogo.png" alt="onextrapixel logo" />
                <div className={styles.icons}>
                    <a href="#"><img src="./src/assets/img/facebok.svg" alt="facebook" /></a>
                    <a href="#"><img src="./src/assets/img/Twitter.svg" alt="Twitter" /></a>
                    <a href="#"><img src="./src/assets/img/linkedin.svg" alt="linkedin" /></a>
                    <a href="#"><img src="./src/assets/img/instagram.svg" alt="instagram" /></a>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;
