import Navbar from "../../components/nav-bar/Navbar.jsx";
import ProductOverview from "../../components/product-overview/ProductOverview.jsx";
import {useLocation} from "react-router-dom";
import Footer from "../../components/footer/Footer.jsx";

export default function ProductOverviewPage() {

    const location = useLocation();

    return (
        <div>

            <div>
                <Navbar/>
            </div>

            <div>
                <ProductOverview id={location.state.data.id}/>
            </div>

            <div className={'mt-6'}>
                <Footer/>
            </div>

        </div>
    );
}