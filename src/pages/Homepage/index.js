// import Banner from "components/Banner/Banner";
import Categories from "components/Categories/Categories";
import Features from "components/Features/Features";
import Header from "components/Header";
import Products from "components/Products/Products";
import Footer from "components/Footer/Footer";
import Newsletter from "components/Newsletter/Newsletter";
import BannerCarousel from "components/Carousel/Carousel";
import ModalProducts from "components/Modal/ModalProducts";

function Homepage() {
    return(
     <>
        <Header />
        <BannerCarousel />
        <Categories />
        <ModalProducts />
        <Products />
        <Features />
        <Newsletter />
        <Footer />
    </>
    )
}

export default Homepage;