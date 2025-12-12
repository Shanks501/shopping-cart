import styles from "./Input.module.css";

export default function Input({ type, id, placeholderText, styleClass }) {
    return (
        <>
            <input
                type={type}
                id={id}
                className={styles[styleClass]}
                placeholder={placeholderText}
            ></input>
        </>
    );
}
