import { useState } from 'react';
import styles from './Newsletter.module.css';
import BtnPurple from 'components/BtnPurple/BtnPurple';

function Newsletter() {
    const [inputEmail, setInputEmail] = useState('');

    const handleChange = (event) => {
        setInputEmail(event.target.value)
    }

    return (
        <section className={styles.newsletter}>
            <p>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se</p>
            <div className={styles.newsletter__subscription}>
                <input type="text"
                    className={styles.newsletter__input__email}
                    value={inputEmail}
                    onChange={handleChange}
                    placeholder="Digite seu email"
                />
                    <BtnPurple label="Enviar" />
            </div>
        </section>
    )
}

export default Newsletter;
