import styles from './Navbar.module.css'
import HeaderLink from 'components/HeaderLink';
import SearchForm from 'components/SearchBar';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';


function Header() {
    return (
        <>
            <Navbar expand="lg" className={styles.navbar}>
                <Container fluid>
                    <Navbar.Brand>
                        <img src="/Logo.png" alt="logo meteora" />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="navbarSupportedContent"
                        aria-label="Toggle navigation"
                    >
                        <img src="/iconMenu.png" alt="icone menu" />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="me-auto mb-2 mb-lg-0">
                            <Nav.Link href="./">
                                <HeaderLink url="./">Home</HeaderLink>
                            </Nav.Link>
                            <Nav.Link href="./lojas">
                                <HeaderLink url="./lojas">Nossas Lojas</HeaderLink>
                            </Nav.Link>
                            <Nav.Link href="./novidades">
                                <HeaderLink url="./novidades">Novidades</HeaderLink>
                            </Nav.Link>
                            <Nav.Link href="./promocoes">
                                <HeaderLink url="./promocoes">Promoções</HeaderLink>
                            </Nav.Link>
                        </Nav>
                        <Col lg={6} className="d-lg-block d-none">
                            <SearchForm />
                        </Col>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="mt-3">
                <Row>
                    <Col xs={12} className="d-lg-none" >
                        <SearchForm />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Header;