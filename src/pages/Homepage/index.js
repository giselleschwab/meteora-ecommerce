// import Banner from "components/Banner/Banner";
import Features from "components/Features/Features";
import Header from "components/Header";
import ProductPage from "components/ProductsPage/ProductsPage";
import Footer from "components/Footer/Footer";
import Newsletter from "components/Newsletter/Newsletter";
import BannerCarousel from "components/Carousel/Carousel";
import { ModalProducts } from "components/Modal/Modal";

function Homepage() {
    return(
     <>
        <Header />
        <BannerCarousel />
        <ModalProducts />
        <ProductPage />
        <Features />
        <Newsletter />
        <Footer />
    </>
    )
}

export default Homepage;