import styles from "./Navbar.module.css";
import Icon from "@mdi/react";
import { mdiMagnify, mdiCart, mdiHeart, mdiAccount } from "@mdi/js";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={offset > 20 ? styles.scroll : undefined}>
            <div className={styles.navbarContentContainer}>
                <div className={styles.mainLogo}>UNICLUB</div>
                <ul className={styles.navText}>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Shop</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
                <ul className={styles.navIcon}>
                    <li>
                        <a href="">
                            <Icon path={mdiAccount} size={1} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <Icon path={mdiHeart} size={1} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <Icon path={mdiCart} size={1} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <Icon path={mdiMagnify} size={"1.7rem"} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
