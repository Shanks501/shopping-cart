import Navbar from "../../components/Navbar/Navbar";
import Herobanner from "../../components/Herobanner/Herobanner";
import styles from "./Homepage.module.css";

export default function Homepage() {
    return (
        <div className={styles.backgroundImageLayer}>
            <Navbar></Navbar>
            <div className="container">
                <Herobanner></Herobanner>
            </div>
        </div>
    );
}
