import styles from './MenuMobile.module.css';
import { IoCloseOutline } from 'react-icons/io5';
import HeaderLink from 'components/HeaderLink';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
    const handleCloseMenu = () => {
        setMenuIsVisible(false)
    }

    return (
        <section className={`${styles.menu__mobile} ${menuIsVisible ? styles.active : ''}`}>
            <IoCloseOutline size={40} 
            className={styles.icon__close}
            onClick={handleCloseMenu} />
            <nav>
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
            </nav>
        </section>
    )
}