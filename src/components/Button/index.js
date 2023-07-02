import styles from './Button.module.css';

function Button({ label, handleClick }) {
    return (
        <button
            className={styles.button}
            onClick={handleClick}
        >
            {label}
        </button>
    )
}


export default Button;