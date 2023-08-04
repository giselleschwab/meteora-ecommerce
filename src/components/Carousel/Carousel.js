import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";


import styles from './Carousel.module.css'

function BannerCarousel() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', handleResize);
  
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
              src={isMobile ? '/images/smallbanner1.png': '/images/banner1.png'}
              alt="Banner 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            className={styles.carousel_imagens}
              src={isMobile ? '/images/smallbanner2.png': '/images/banner2.png'}
              alt="Banner 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            className={styles.carousel_imagens}
              src={isMobile ? '/images/smallbanner3.png' : '/images/banner3.png'}
              alt="Banner 3"
            />
          </Carousel.Item>
        </Carousel>
      </div>   
    )
}

export default BannerCarousel; 