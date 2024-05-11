import Navbar from "../../components/nav-bar/Navbar.jsx";
import ProductOverview from "../../components/product-overview/ProductOverview.jsx";

export default function ProductOverviewPage() {
    return (
        <div>

            <div>
                <Navbar/>
            </div>

            <div>
                <ProductOverview/>
            </div>

        </div>
    );
}