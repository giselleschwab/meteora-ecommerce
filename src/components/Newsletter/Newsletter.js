import { useState } from 'react';
import styles from './Newsletter.module.css';
import { ModalNews } from 'components/Modal/Modal';
import BtnPurple from 'components/BtnPurple/BtnPurple';

function Newsletter() {
    const [inputEmail, setInputEmail] = useState('');
    const [showModalNews, setShowModalNews] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        setInputEmail(event.target.value)
    }

    const handleCloseModal = () => {
        setShowModalNews(false);
        setError(false);
    }

    const handleOpenModal = () => setShowModalNews(true);

    const isValidEmail = (email) => {
        return email.includes('@') && email.indexOf('@') < email.lastIndexOf('.');
    }

    const handleSubmit = () => {
        if (isValidEmail(inputEmail)) {
            setSuccess(true);
            setError(false);
            handleOpenModal();
            clearSearchField();
        } else {
            setError(true);
            handleOpenModal();
        }
    }

    const clearSearchField = () => {
        setInputEmail('');
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
                <BtnPurple label="Enviar" handleClick={handleSubmit}>

                </BtnPurple>
            </div>
           <ModalNews showModalNews={showModalNews}
            handleCloseModalNews={handleCloseModal}  
            success={success}
            error={error}/> 
           
        </section >
    )
}

export default Newsletter;
