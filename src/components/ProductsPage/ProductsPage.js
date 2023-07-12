import BtnPurple from 'components/BtnPurple/BtnPurple';
import styles from './ProductsPage.module.css'
import { useEffect, useState, useContext} from 'react';
import getProducts from 'API/products';
import getCategories from 'API/categories';
import SearchContext from 'SearchContext/SearchContext';

function ProductPage() {
    const [categoriesList, setCategoriesList] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [productsList, setProductsList] = useState([]);
    const { searchValue } = useContext(SearchContext)
  
    useEffect(() => {
      async function fetchData() {
        const categoriesResponse = await getCategories();
        setCategoriesList(categoriesResponse);
        const productsResponse = await getProducts();
        setProductsList(productsResponse);
      }
      fetchData();
    }, []);
  
    const handleCategoryClick = categoryId => {
      setSelectedCategoryId(categoryId);
    };
    
    const filteredProducts = productsList.filter((product) => {
      const productName = product.name.toLowerCase();
      const searchTerm = searchValue.toLowerCase();
      const categoryIdMatch = selectedCategoryId
        ? product.id_category === selectedCategoryId
        : true;
  
      return productName.includes(searchTerm) && categoryIdMatch;
    });
 
    return (
      <div>
        <section className={styles.categories}>
          <h3>Busque por categoria:</h3>
          <div className={styles.categories__cards}>
            {categoriesList.map(category => (
              <img
                key={category.id}
                src={category.src}
                alt={category.name}
                onClick={() => handleCategoryClick(category.id)}
              />
            ))}
          </div>
        </section>
  
        <section>
          <h3>Produtos que estão bombando</h3>
          <div className={styles.products}>
            {filteredProducts.map(product => (
              <div key={product.id} className={styles.products__description}>
                <img src={product.src} alt={product.name} />
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <h4>R$ {product.price}</h4>
                <div className={styles.products__btnView}>
                  <BtnPurple label="Ver mais" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  
  export default ProductPage;