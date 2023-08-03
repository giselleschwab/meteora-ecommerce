import styles from './Features.module.css';


function Features() {
    return (
        <section className={styles.features}>
            <h3>Conheça todas as nossas facilidades</h3>
            <div className={styles.features__description}>
                <div className={styles.features__description__payment}>
                    <img src='/images/x-diamond.png' alt="icone de pagamento"></img>
                    <h4>Pague pelo pix</h4>
                    <p>Ganhe 5% OFF em pagamentos via PIX</p>
                </div>
                <div className={styles.features__description__payment}>
                    <img src='/images/arrow-repeat.png' alt="icone de troca grátis"></img>
                    <h4>Troca grátis</h4>
                    <p>Fique livre para trocar em até 30 dias</p>
                </div>
                <div className={styles.features__description__payment}>
                    <img src='/images/flower1.png' alt="icone de sustentabilidade"></img>
                    <h4>Sustentabilidade</h4>
                    <p>Moda responsável, que respeita o meio ambiente</p>
                </div>
            </div>
        </section>
    )
}

export default Features;
