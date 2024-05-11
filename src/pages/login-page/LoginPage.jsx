import Navbar from "../../components/nav-bar/Navbar.jsx";
import LoginForm from "../../components/login/LoginForm.jsx";
import Footer from "../../components/footer/Footer.jsx";

export default function LoginPage() {
    return (
        <div>

            <div>
                <Navbar/>
            </div>

            <div>
                <LoginForm/>
            </div>

            <div className={'mt-80'}>
                <Footer/>
            </div>

        </div>
    );
}