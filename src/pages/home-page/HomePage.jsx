import Navbar from "../../components/nav-bar/Navbar.jsx";
import CardContainer from "../../components/card-container/CardContainer.jsx";
import Footer from "../../components/footer/Footer.jsx";
import HomeCarousel from "../../components/home-carousel/HomeCarousel.jsx";

export default function HomePage() {
    return (
        <div>

            <div>
                <Navbar/>
            </div>

            <div>
                <HomeCarousel/>
            </div>

            <div>
                <CardContainer/>
            </div>

            <div>
                <Footer/>
            </div>

        </div>
    );
}