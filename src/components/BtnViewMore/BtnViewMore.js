import styles from './BtnViewMore.module.css';

function BtnViewMore({ label, handleClick }) {
    return (
        <button
            className={styles.btn__view}
            onClick={handleClick}>
            {label}
        </button>
    )
}

export default BtnViewMore; 