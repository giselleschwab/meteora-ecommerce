import styles from './ButtonSearch.module.css'

function Button({ label, handleClick, searchProducts }) {
    return (
        <button
            className={styles.button}
            onClick={handleClick}
            onSearch={searchProducts}
        >
            {label}
        </button>
    )
}


export default Button;