import { useEffect, useState } from 'react';
import getCategories from 'API/categories';
import styles from './Categories.module.css';

function Categories({ onCategoryClick }) {
    const [categoriesList, setCategoriesList] = useState([]);
  


    useEffect(() => {
        async function fetchData() {
            const response = await getCategories();
            setCategoriesList(response)
        }
        fetchData()
    }, [])

    const handleCategoryClick = categoryId => {
        onCategoryClick(categoryId);
      };

    return (
        <section className={styles.categories}>
            <h3> Busque por categoria: </h3>
            <div className={styles.categories__cards}>
                {categoriesList.map(category => (
                    <img
                        key={category.id}
                        src={category.src}
                        alt={category.name}
                        onClick={() => handleCategoryClick(category.id)} />
                ))}
            </div>
        </section>
    )
}

export default Categories; 