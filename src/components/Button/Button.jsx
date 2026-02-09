import styles from "./Button.module.css";

export default function Button({ type, text, variant, shape, border, ...rootDOMAttributes }) {
    return (
        <>
            <button
                type={type}
                className={`${styles[variant]} ${styles[shape]} ${styles[border]}`}
                {...rootDOMAttributes}
            >
                {text}
            </button>
        </>
    );
}
