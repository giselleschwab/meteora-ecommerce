import styles from './BtnPurple.module.css'

function BtnPurple ({ label, handleClick }) {
    return (
        <button
            className={styles.btn__view}
            onClick={handleClick}>
            {label}
        </button>
    )
}

export default BtnPurple; 