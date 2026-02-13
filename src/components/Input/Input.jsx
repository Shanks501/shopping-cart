import styles from "./Input.module.css";

export default function Input({ type, id, placeholderText, styleClass, ...rootDOMAttributes }) {
    return (
        <>
            <input
                type={type}
                id={id}
                className={styles[styleClass]}
                placeholder={placeholderText}
                {...rootDOMAttributes}
            ></input>
        </>
    );
}
