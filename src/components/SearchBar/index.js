import { useState } from "react";
import styles from './SearchBar.module.css'

function SearchBar() {
    const [searchProduct, setSearchProduct] = useState('');

    const handleChange = (event) => {
        setSearchProduct(event.target.value);
    }
    // console.log(searchProduct)

    return (
        <input type="text"
        className={styles.input__search}
        value={searchProduct}
        onChange={handleChange}
        placeholder="Digite o produto"
        />
    )
}

export default SearchBar;