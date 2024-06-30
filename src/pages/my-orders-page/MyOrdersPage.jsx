import Navbar from "../../components/nav-bar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Table from "../../components/table/Table.jsx";
import {useEffect, useState} from "react";
import image from "../../assets/empty-box(3).png"
import axios from "axios";

export default function MyOrdersPage() {

    const [orders, setOrders] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                // setIsLoading(true)
                // get access token
                const userData = JSON.parse(localStorage.getItem('user_data'));
                const accessToken = userData.tokens['accessToken'];

                const response = await axios.get(`http://localhost:9090/api/v1/order?user_id=${userData.user._id}`, {
                    headers: {
                        'Authorization': `bearer ${accessToken}`,
                    }
                });

                setOrders(response.data.data);
                // setIsLoading(false);
            } catch (error) {
                // setIsLoading(true)
                console.error('Error fetching data:', error);
            }
        };

        fetchData().then(r => console.log(r));

    }, []);

    console.log(orders)

    return (
        <div>

            <div>
                <Navbar/>
            </div>

            <div>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        My Orders
                    </h2>
                </div>
            </div>

            <div className={'px-32 py-10'}>
                {orders.length === 0 ?
                    <div className={'mt-10'}>
                        <img src={image} className={'image-full mx-auto w-36'}/>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className={'p-6 text-base'}>Oops, Looks like you don't have any orders yet 🫣</p>
                    </div> : <Table orders={orders}/>}
            </div>

            <div
                className={`${orders.length === 0 ? 'mt-56' : orders.length === 2 ? 'mt-80' : orders.length === 3 ? 'mt-60' : orders.length === 1? 'mt-96':''}`}>
                <Footer/>
            </div>

        </div>
    );
}