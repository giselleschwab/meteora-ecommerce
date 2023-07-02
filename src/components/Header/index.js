import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from './Logo.png';
import styles from './Header.module.css';
import HeaderLink from 'components/HeaderLink';
import SearchBar from 'components/SearchBar';
import Button from 'components/Button';
import iconMenu from './iconMenu.png';
import { MenuMobile } from 'components/MenuMobile/MenuMobile';

function Header() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const handleMenuToggle = () => {
        setMenuIsVisible(!menuIsVisible)
    }

    return (
        <header className={styles.header}>
            <nav className={styles.header__links}>
                <Link to="./">
                    <img className={styles.logo__meteora} src={logo}  alt="Logo Meteora"></img>
                </Link>
                <div className={`${styles.menu__toggle} ${menuIsVisible ? styles.active : ''}`}
                    onClick={handleMenuToggle}>
                    <img src={iconMenu} alt="Menu hamburguer" className={styles.menu__hamburguer}></img>
                </div>
                <div className={styles.menu__itens}>
                    <ul>
                        <li><HeaderLink url="./">
                            Home
                        </HeaderLink></li>
                        <li><HeaderLink url="./lojas">
                            Nossa lojas
                        </HeaderLink></li>
                        <li><HeaderLink url="./novidades">
                            Novidades
                        </HeaderLink></li>
                        <li><HeaderLink url="./promocoes">
                            Promoções
                        </HeaderLink></li>
                    </ul>
                </div>
            </nav>
            <div className={styles.header__search}>
                <SearchBar />
                <Button className={styles.button__search} label="Buscar" />
            </div>

            {menuIsVisible && (
                <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
            )}
        </header>
    )
}

export default Header;