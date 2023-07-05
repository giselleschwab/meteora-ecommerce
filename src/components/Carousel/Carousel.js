import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import bannerOne from './Imagem_banner1.png';
import bannerTwo from './Imagem_banner2.png';
import bannerThree from './Imagem_banner3.png';
import smallBannerOne from './small_banner_1.png';
import smallBannerTwo from './small_banner_2.png';
import smallBannerThree from './small_banner_3.png';


import styles from './Carousel.module.css'

function BannerCarousel() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Atualiza o estado quando a tela é redimensionada
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Define o estado inicial com base no tamanho da tela atual
      setIsMobile(window.innerWidth < 768);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return(
        <div className={styles.carousel__banners}>
        <Carousel>
          <Carousel.Item>
            <img
            className={styles.carousel_imagens}
              src={isMobile ? smallBannerOne : bannerOne}
              alt="Banner 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            className={styles.carousel_imagens}
              src={isMobile ? smallBannerTwo : bannerTwo}
              alt="Banner 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            className={styles.carousel_imagens}
              src={isMobile ? smallBannerThree : bannerThree}
              alt="Banner 3"
            />
          </Carousel.Item>
        </Carousel>
      </div>   
    )
}

export default BannerCarousel; 