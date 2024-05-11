import Navbar from "../../components/nav-bar/Navbar.jsx";
import SignupForm from "../../components/sign-up/SignupForm.jsx";
import Footer from "../../components/footer/Footer.jsx";

export default function SignUpPage() {
    return (
        <div>

            <div>
                <Navbar/>
            </div>

            <div>
                <SignupForm/>
            </div>

            <div className={'mt-80'}>
                <Footer/>
            </div>

        </div>
    );
}