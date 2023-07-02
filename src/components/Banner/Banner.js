import React, { useState, useEffect } from 'react';
import BannerDesktop from './Banner_Desktop_1.png';
import BannerTablet from './Banner_tablet_1.png';
import BannerCellPhone from './Banner_celular_1.png';
import styles from './Banner.module.css'

const Banner = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Determinar qual imagem exibir com base na largura da janela
    if (windowWidth < 700) {
      setImageUrl(`${BannerCellPhone}`)
    } else if (windowWidth < 1024) {
      setImageUrl(`${BannerTablet}`);
    } else {
      setImageUrl(`${BannerDesktop}`);
    }
  }, [windowWidth]);

  return (
    <section className={styles.banner}>
      <img src={imageUrl} alt="Banner" />
    </section>
  );
};

export default Banner;