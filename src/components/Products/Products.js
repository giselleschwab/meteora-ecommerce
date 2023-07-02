import BtnViewMore from "components/BtnViewMore/BtnViewMore";
import styles from './Products.module.css';
import tShirt from './Camiseta.png';

function Products() {
    return (
        <section>
            <h3>Produtos que estão bombando</h3>
            <div className={styles.products}>
                <div className={styles.products__description}>
                    <img src={tShirt} alt="imagem de um rapaz usando uma camiseta"></img>
                    <h4>Camiseta Conforto</h4>
                    <p>Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex</p>
                    <h4>R$ 70,00</h4>
                    <div className={styles.products__btnView}>
                        <BtnViewMore label="Ver mais" />
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Products; 
