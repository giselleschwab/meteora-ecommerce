import Banner from "components/Banner/Banner";
import Categories from "components/Categories/Categories";
import Features from "components/Features/Features";
import Header from "components/Header";

function Homepage() {
    return(
     <>
        <Header />
        <Banner />
        <Categories />
        <Features />
    </>
    )
}

export default Homepage;