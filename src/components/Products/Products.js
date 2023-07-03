import BtnViewMore from "components/BtnViewMore/BtnViewMore";
import styles from './Products.module.css';
import tShirt from './Camiseta.png';
import pants from './Calça.png'
import shoes from './Tenis.png';
import coats from './Jaqueta.png';
import glasses from './óculos.png';
import bags from './Bolsa.png';

function Products() {
    return (
        <section>
            <h3>Produtos que estão bombando</h3>
            <div className={styles.products}>
                <div className={styles.products__description}>
                    <img src={tShirt} alt="imagem de um rapaz usando uma camiseta"></img>
                    <h4>Camiseta Conforto</h4>
                    <p>Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.</p>
                    <h4>R$ 70,00</h4>
                    <div className={styles.products__btnView}>
                        <BtnViewMore label="Ver mais" />
                    </div>
                </div>
                <div className={styles.products__description}>
                    <img src={pants} alt="imagem de uma mulher"></img>
                    <h4>Calça Alfaiataria</h4>
                    <p>Modelo Wide Leg Alfaiataria em linho. Uma peça pra vida toda!</p>
                    <h4>R$ 180,00</h4>
                    <div className={styles.products__btnView}>
                        <BtnViewMore label="Ver mais" />
                    </div>
                </div>
                <div className={styles.products__description}>
                    <img src={shoes} alt="imagem de tênis"></img>
                    <h4>Tênis Chunky</h4>
                    <p>Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.</p>
                    <h4>R$ 250,00</h4>
                    <div className={styles.products__btnView}>
                        <BtnViewMore label="Ver mais" />
                    </div>
                </div>
                <div className={styles.products__description}>
                    <img src={coats} alt="imagem de um homem vestindo uma jaqueta"></img>
                    <h4>Jaqueta jeans</h4>
                    <p>Modelo unissex oversized com gola de camurça. Atemporal e autêntica!</p>
                    <h4>R$ 150,00</h4>
                    <div className={styles.products__btnView}>
                        <BtnViewMore label="Ver mais" />
                    </div>
                </div>
                <div className={styles.products__description}>
                    <img src={glasses} alt="imagem de um homem com óculos"></img>
                    <h4>Óculos Redondo</h4>
                    <p>Armação metálica em grafite com lentes arredondadas. Sem erro! </p>
                    <h4>R$ 120,00</h4>
                    <div className={styles.products__btnView}>
                        <BtnViewMore label="Ver mais" />
                    </div>
                </div>
                <div className={styles.products__description}>
                    <img src={bags} alt="imagem de uma pessoa segurando uma bolsa"></img>
                    <h4>Bolsa coringa</h4>
                    <p>Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!</p>
                    <h4>R$ 120,00</h4>
                    <div className={styles.products__btnView}>
                        <BtnViewMore label="Ver mais" />
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Products; 
