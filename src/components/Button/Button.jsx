import styles from "./Button.module.css";

export default function Button({ type, text, styleClass }) {
    return (
        <>
            <button type={type} className={styles[styleClass]}>
                {text}
            </button>
        </>
    );
}
