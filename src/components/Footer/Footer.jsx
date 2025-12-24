import {
    FaFacebookF,
    FaSquareXTwitter,
    FaSquareInstagram,
    FaPinterest,
    FaYoutube,
} from "react-icons/fa6";

import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerLinks}>
                        <div className={styles.socialMediaLinks}>
                            <h3>UNICLUB</h3>
                            <div className={styles.socialMediaIcons}>
                                <FaFacebookF color="white" size={20} />
                                <FaSquareXTwitter color="white" size={20} />
                                <FaPinterest color="white" size={20} />
                                <FaSquareInstagram color="white" size={20} />
                                <FaYoutube color="white" size={20} />
                            </div>
                        </div>

                        <div className={styles.siteMapLinks}>
                            <div className={styles.footerMenu}>
                                <h6>Quick Links</h6>
                                <a href="">Home</a>
                                <a href="">About us</a>
                                <a href="">Offer</a>
                                <a href="">Services</a>
                                <a href="">Conatct Us</a>
                            </div>
                            <div className={styles.footerMenu}>
                                <h6>About</h6>
                                <a href="">How It Work</a>
                                <a href="">Our Packages</a>
                                <a href="">promotions</a>
                                <a href="">refer a friend</a>
                            </div>
                            <div className={styles.footerMenu}>
                                <h6>Help Center</h6>
                                <a href="">Payments</a>
                                <a href="">Shipping</a>
                                <a href="">Product returns</a>
                                <a href="">FAQs</a>
                                <a href="">Checkout</a>
                                <a href="">other Issues</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className={styles.separator} />
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerInfo}>
                        <p>© 2025 UNICLUB. All rights reserved.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
