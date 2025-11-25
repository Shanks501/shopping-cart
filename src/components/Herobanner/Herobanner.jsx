import styles from "./Herobanner.module.css";
import Button from "../Button/Button";

export default function Herobanner() {
    return (
        <section className={styles.heroBanner}>
            <div className={styles.heroCard}>
                <h1>
                    Street<br></br> wears
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <Button type={"button"} text={"Start shopping"} styleClass={"secondaryButton"} />
            </div>
        </section>
    );
}
