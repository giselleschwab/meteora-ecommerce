import styles from './Categories.module.css';
import tshrits from './card-camisetas.png';
import bags from './card-bolsas.png';
import shoes from './card-sapatos.png';
import pants from './card-calças.png';
import coats from './card-casacos.png';
import glasses from './card-oculos.png'; 


function Categories() {
    return (
        <section className={styles.categories}>
            <h3> Busque por categoria: </h3>
            <div class={styles.categories__cards}>
                <img src={tshrits} alt="t-shirts cards"></img>
                <img src={bags} alt="bags cards"></img>
                <img src={shoes} alt="shoes cards"></img>
                <img src={pants} alt="pants cards"></img>
                <img src={coats} alt="coats cards"></img>
                <img src={glasses} alt="glasses cards"></img>
            </div>
        </section>
    )
}

export default Categories; 