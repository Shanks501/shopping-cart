import { Link } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import styles from "./ErrorPage.module.css";
import Button from "../../components/Button/Button";

export default function ErrorPage() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className={styles.errorPageMessage}>
                    <h1>404</h1>
                    <p>Page not found</p>
                    {/* <p>We are sorry, but the page you requested was not found</p> */}
                    <Link to={"/"}>
                        <Button type={"button"} text={"Go Home"} styleClass={"primaryButton"} />
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    );
}
