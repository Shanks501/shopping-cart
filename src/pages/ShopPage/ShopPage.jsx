import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";

import styles from "./ShopPage.module.css";

export default function Shop() {
    return (
        <>
            <Navbar />
            <div className={styles.backgroundImageLayer}>
                <div className="container">
                    <Header headertitle={"Shop"} />
                </div>
            </div>
        </>
    );
}
