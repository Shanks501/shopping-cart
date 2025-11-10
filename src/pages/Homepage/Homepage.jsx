import Navbar from "../../components/Navbar/Navbar";
import Herobanner from "../../components/Herobanner/Herobanner";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";

import styles from "./Homepage.module.css";

export default function Homepage() {
    return (
        <>
            <div className={styles.backgroundImageLayer}>
                <Navbar />
                <div className="container">
                    <Herobanner />
                </div>
            </div>
            <div className="container">
                <ServiceBanner />
            </div>
        </>
    );
}
