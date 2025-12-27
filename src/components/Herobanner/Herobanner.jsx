import styles from "./Herobanner.module.css";
import Button from "../Button/Button";
import { Link } from "react-router";

export default function Herobanner() {
    return (
        <section className={styles.heroBanner}>
            <div className={styles.heroCard}>
                <h1>
                    Street<br></br> wears
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <Link to="/shop">
                    <Button
                        type={"button"}
                        text={"Start shopping"}
                        styleClass={"secondaryButton-hover"}
                    />
                </Link>
            </div>
        </section>
    );
}
