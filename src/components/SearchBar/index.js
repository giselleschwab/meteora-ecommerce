
import { useState } from "react";
import { useContext } from "react";
import styles from './SearchBar.module.css'
import Button from "components/ButtonSearch";
import ProductContext from "SearchContext/SearchContext";

function SearchBar() {
    const [searchProduct, setSearchProduct] = useState('');
    const { setSearchValue } = useContext(ProductContext);

    const handleChange = (event) => {
        setSearchProduct(event.target.value);
        setSearchValue(event.target.value);
    }

    const handleSearch = () => {
        console.log(searchProduct)
    }
    

    return (
        <>
        <input type="text"
        className={styles.input__search}
        value={searchProduct}
        onChange={handleChange}
        placeholder="Digite o produto"
        />
        <Button onClick={handleSearch} label="Buscar" />
        </>
    )
}

export default SearchBar;