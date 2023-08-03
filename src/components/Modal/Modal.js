import { useContext, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import styles from './Modal.module.css';
import check from './check-circle.png';
import errorIcon from './error.png';
import closeButton from './icon-close.png'
import BtnPurple from "components/BtnPurple/BtnPurple";
import getProducts from "API/products";
import ProductContext from "SearchContext/SearchContext";

export function ModalProducts({ showModal, handleCloseModal }) {
    const { selectedProduct, setSelectedProduct } = useContext(ProductContext)

    useEffect(() => {
        async function fetchData() {
            const response = await getProducts();
            setSelectedProduct(response)
        }
        fetchData();
    }, [setSelectedProduct]);



    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal} size="lg" dialogClassName={styles.modal}>
                <Modal.Header className={styles.header}>
                    <Modal.Title className={styles.modal__header}>
                        <img src={check} alt="botão check" className={styles.modal__image}></img>
                        Confira detalhes sobre o produto
                        <img src={closeButton} className={styles.header__button} alt="botão fechar" onClick={handleCloseModal}></img>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modal__body}>
                    {selectedProduct && (
                        <>
                            <img src={selectedProduct.src} alt={selectedProduct.name} className={styles.modal__photo}></img>
                            <div className={styles.modal__body__description}>
                                <h3>{selectedProduct.name}</h3>
                                <p>{selectedProduct.description}</p>
                                <h4>R$ {selectedProduct.price}</h4>
                                <h5>Vendido e entregue por Riachuelo</h5>
                                <div className={styles.modal__form}>
                                    <h6>Cores:</h6>
                                    {selectedProduct.colors && (
                                        <div className={styles.modal__color__size}>
                                            {selectedProduct.colors.map((color, index) => (
                                                <label htmlFor={`color_${index}`} key={`color_${index}`}>
                                                    <input type="radio" id={`color_${index}`} className={styles.modal__radio} />
                                                    {color}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <h6>Tamanho:</h6>
                                {selectedProduct.sizes && (
                                    <div className={styles.modal__color__size}>
                                        {selectedProduct.sizes.map((size, index) => (
                                            <label htmlFor={`size_${index}`} key={`size_${index}`}>
                                                <input type="radio" id={`size_${index}`} className={styles.modal__radio} />
                                                {size}
                                            </label>
                                        ))}
                                    </div>
                                )}
                                <div className={styles.modal__btn}>
                                    <BtnPurple label="Adicionar à sacola" />
                                </div>
                            </div>
                        </>
                    )}
                </Modal.Body >
            </Modal >

        </>
    );
}


export function ModalNews({ showModalNews, handleCloseModalNews, success }) {
    const imageSrc = success ? check : errorIcon;
    const title = success ? 'E-mail cadastrado com sucesso!' : 'Erro ao cadastrar o e-mail!';
    const message = success ? 'Em breve você receberá novidades exclusivas da Meteora.' : 'Ocorreu um erro ao cadastrar o e-mail. Por favor, tente novamente.';

    return (
        <Modal show={showModalNews}
            onHide={handleCloseModalNews}
            className="d-flex align-items-center justify-content-center"
            style={{ maxHeight: '80vh' }}>
            <Modal.Header className={styles.header}>
                <div className={styles.modal__header}>
                    <img src={imageSrc} alt="icone" className={styles.modal__image} />
                    {title}
                </div>
                <img src={closeButton} className={styles.header__button__news} alt="botão fechar" onClick={handleCloseModalNews}></img>
            </Modal.Header>
            <Modal.Body className={styles.modal__body}>
                <p>{message}</p>
            </Modal.Body>
        </Modal>
    );
}

