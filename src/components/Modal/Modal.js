import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import styles from './Modal.module.css';
import check from './check-circle.png';
import closeButton from './icon-close.png'
import coat from './Jaqueta.png';
import BtnPurple from "components/BtnPurple/BtnPurple";

export function ModalProducts() {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);
    return (
        <>
            <Button variant="primary" onClick={openModal}>
                Abrir a modal
            </Button>

            <Modal show={showModal} onHide={closeModal} size="lg" dialogClassName={styles.modal}>
                <Modal.Header className={styles.header}>
                    <Modal.Title className={styles.modal__header}>
                        <img src={check} alt="botão check" className={styles.modal__image}></img>
                        Confira detalhes sobre o produto
                        <img src={closeButton} className={styles.header__button} alt="botão fechar" onClick={closeModal}></img>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modal__body}>
                    <img src={coat} alt="homem vestindo uma jaqueta" className={styles.moda__image}></img>
                    <div class={styles.modal__body__description}>
                        <h3>Jaqueta Jeans</h3>
                        <p>Modelo unissex oversized com gola de camurça. Atemporal e autêntica!</p>
                        <h4>R$ 150,00</h4>
                        <h5>Vendido e entregue por Riachuelo</h5>
                        <form className={styles.modal__form}>
                            <h6>Cores:</h6>
                            <div className={styles.modal__color__size}>
                                <label htmlFor="azulClaro" className={styles.modal__radio__blue}>
                                    <input type="radio" id="azulClaro" className={styles.modal__radio} />
                                    Azul claro
                                </label>
                                <label htmlFor="offwhite">
                                    <input type="radio" id="offwhite" className={styles.modal__radio} />
                                    Offwhite
                                </label>
                                <label htmlFor="preto">
                                    <input type="radio" id="preto" className={styles.modal__radio} />
                                    Preto
                                </label>
                            </div>
                        </form>
                        <form>
                            <h6>Tamanho:</h6>
                            <div className={styles.modal__color__size}>
                                <label htmlFor="sizeP" >
                                    <input type="radio" className={styles.modal__radio} />
                                    P
                                </label>
                                <label htmlFor="sizePP">
                                    <input type="radio" className={styles.modal__radio} />
                                    PP
                                </label>
                                <label htmlFor="sizeM">
                                    <input type="radio" className={styles.modal__radio} />
                                    M
                                </label>
                                <label htmlFor="sizeG">
                                    <input type="radio" className={styles.modal__radio} />
                                    G
                                </label>
                                <label htmlFor="sizeGG">
                                    <input type="radio" className={styles.modal__radio} />
                                    GG
                                </label>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer className={styles.modal__footer}>
                    <BtnPurple label="Adicionar à sacola" />
                </Modal.Footer>
            </Modal>
        </>
    );
}


export function ModalNews({ showModalNews, handleCloseModal }) {
    return (
        <Modal show={showModalNews} onHide={handleCloseModal}>
            <Modal.Header className={styles.header}>
            <Modal.Title className={styles.modal__header}>
                        <img src={check} alt="botão check" className={styles.modal__image}></img>
                        E-mail cadastrado com sucesso!
                        <img src={closeButton} className={styles.header__button__news} alt="botão fechar" onClick={handleCloseModal}></img>
                    </Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.modal__body}>
                <p>Em breve você receberá novidades exclusivas da Meteora.</p>
            </Modal.Body>
        </Modal>
    );
}
