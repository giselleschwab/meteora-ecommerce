import Banner from "components/Banner/Banner";
import Categories from "components/Categories/Categories";
import Features from "components/Features/Features";
import Header from "components/Header";
import Products from "components/Products/Products";

function Homepage() {
    return(
     <>
        <Header />
        <Banner />
        <Categories />
        <Products />
        <Features />
    </>
    )
}

export default Homepage;