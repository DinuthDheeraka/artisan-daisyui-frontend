import Navbar from "../../components/nav-bar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ProductAddForm from "../../components/product-add-form/ProductAddForm.jsx";

export default function ProductAddPage() {
    return (
        <div>

            <div>
                <Navbar/>
            </div>

            <div>
                <ProductAddForm/>
            </div>

            <div className={'mt-32'}>
                <Footer/>
            </div>

        </div>
    );
}