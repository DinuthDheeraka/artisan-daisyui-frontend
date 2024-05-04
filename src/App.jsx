import './App.css'
import Navbar from "./components/nav-bar/Navbar.jsx";
import CardContainer from "./components/card-container/CardContainer.jsx";
import Footer from "./components/footer/Footer.jsx";
import PaginationButtonGroup from "./components/pagination-button-group/PaginationButtonGroup.jsx";

function App() {

    return (
        <>
            <Navbar/>
            <CardContainer/>
            {/*<ProductOverview/>*/}
            <PaginationButtonGroup/>
            <Footer/>
        </>
    )
}

export default App
