import Navbar from "../../components/nav-bar/Navbar.jsx";
import CardContainer from "../../components/card-container/CardContainer.jsx";
import Footer from "../../components/footer/Footer.jsx";
import HomeCarousel from "../../components/home-carousel/HomeCarousel.jsx";
import {useState} from "react";

export default function HomePage() {

    const [filter, setFilter] = useState({category: '', gender: ''})

    function handleFilterChange(updatedFilter) {
        setFilter({...updatedFilter});
    }

    return (
        <div>

            <div>
                <Navbar handleFilterChange={handleFilterChange} handleIconOnClick={() => {
                    window.location.reload();
                }}/>
            </div>

            <div>
                <HomeCarousel/>
            </div>

            <div>
                <CardContainer filter={filter}/>
            </div>

            <div>
                <Footer/>
            </div>

        </div>
    );
}