import { useContext } from "react";
import styles from './SearchBar.module.css'
import Button from "components/ButtonSearch";
import SearchContext from "SearchContext/SearchContext";

function SearchBar() {
    const { searchValue, setSearchValue } = useContext(SearchContext);

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleSearch = () => {
        console.log(searchValue)
    }

    return (
        <>
        <input type="text"
        className={styles.input__search}
        value={searchValue}
        onChange={handleChange}
        placeholder="Digite o produto"
        />
        <Button onClick={handleSearch} label="Buscar" />
        </>
    )
}

export default SearchBar;