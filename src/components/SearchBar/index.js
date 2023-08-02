
import { useState } from "react";
import { useContext } from "react";
import styles from './SearchBar.module.css'
import Button from "components/ButtonSearch";
import SearchContext from "SearchContext/SearchContext";

function SearchBar() {
    const [searchProduct, setSearchProduct] = useState('');
    const { searchValue, setSearchValue } = useContext(SearchContext);

    const handleChange = (event) => {
        setSearchProduct(event.target.value);
        setSearchValue(event.target.value);
    }

    const handleSearch = () => {
        console.log(searchValue)
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