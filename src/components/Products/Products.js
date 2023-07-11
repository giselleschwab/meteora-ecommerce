import BtnPurple from 'components/BtnPurple/BtnPurple';
import styles from './Products.module.css';
import { useEffect, useState } from 'react';
import getProducts from 'API/connectAPI';
// import pants from './Calça.png'
// import shoes from './Tenis.png';
// import coats from './Jaqueta.png';
// import glasses from './óculos.png';
// import bags from './Bolsa.png';

function Products() {
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getProducts();
            setProductsList(response)
        }
        fetchData();
    }, [])

    return (
        <section>
            <h3>Produtos que estão bombando</h3>
            <div className={styles.products}>
                {productsList.map(product => (
                    <div key={product.id} className={styles.products__description}>
                        <img src={product.src} alt={product.name}></img>
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


    )
}

export default Products; 
