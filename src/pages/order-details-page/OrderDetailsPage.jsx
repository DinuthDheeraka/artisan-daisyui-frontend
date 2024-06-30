import Navbar from "../../components/nav-bar/Navbar.jsx";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import OrderDetailTableItem from "../../components/order-detail-table-item/OrderDetailTableItem.jsx";

export default function OrderDetailsPage() {

    const location = useLocation();
    const [orderDetail, setOrderDetail] = useState({})

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const orderId = location.state.data.id ? location.state.data.id : -1;

    useEffect(() => {
        const findProductById = async () => {

            // get access token
            const userData = JSON.parse(localStorage.getItem('user_data'));
            const accessToken = userData.tokens['accessToken'];

            const response = await axios.get(`http://localhost:9090/api/v1/order/${orderId}`, {
                headers: {
                    'Authorization': `bearer ${accessToken}`,
                }
            });

            setOrderDetail(response.data.data)

        }
        findProductById().then(r => console.log(r));
    }, [orderId]);

    let order = {
        total: 0,
        deliveryTotal: 0
    };

    const orderItems = orderDetail && orderDetail.items ? orderDetail.items : [];

    function getOrderTotal() {
        let total = 0;
        orderItems.forEach(item => {
            total += item.price * item.qty;
        })
        order.subTotal = total;
        order.deliveryTotal = 150 * orderItems.length;
        order.total = order.subTotal + order.deliveryTotal;
    }

    getOrderTotal();

    return (
        <div>

            <div>
                <Navbar/>
            </div>

            <section className="py-10 relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">

                    <h2 className="title font-manrope font-bold text-2xl leading-10 mb-8 text-center text-black">Order
                        details
                    </h2>
                    <div className="hidden lg:grid grid-cols-2 py-6">
                        <div className="font-normal text-md leading-8 text-gray-500">Product</div>
                        <p className="font-normal text-md leading-8 text-gray-500 flex items-center justify-between">
                            <span className="w-full max-w-[200px] text-center">Delivery Charge</span>
                            <span className="w-full max-w-[260px] text-center">Quantity</span>
                            <span className="w-full max-w-[200px] text-center">Total</span>
                        </p>
                    </div>

                    {
                        orderItems.map((item) => {

                            const {itemImg, itemName, id, itemSize, qty, price} = item;

                            return <OrderDetailTableItem
                                key={id}
                                changeCartState={() => {
                                }} id={id} image={itemImg}
                                name={itemName} size={itemSize}
                                price={price} qty={qty} selectedQty={qty}/>
                        })
                    }

                    <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                        <div className="flex items-center justify-between w-full mb-6">
                            <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                            <h6 className="font-semibold text-xl leading-8 text-gray-900">LKR {(order.total).toLocaleString()}</h6>
                        </div>
                        <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                            <p className="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
                            <h6 className="font-semibold text-xl leading-8 text-gray-900">LKR {(order.deliveryTotal).toLocaleString()}</h6>
                        </div>
                        <div className="flex items-center justify-between w-full py-6">
                            <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                            <h6 className="font-manrope font-bold text-2xl leading-9 text-indigo-500">LKR {(order.total).toLocaleString()}</h6>
                        </div>
                    </div>
                    <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                        <button className={' w-full max-w-[280px] '}></button>
                        <button className={' w-full max-w-[280px] '}></button>
                        <button className={' w-full max-w-[280px] '}></button>
                        <button className={' w-full max-w-[280px] '}></button>
                        <button
                            className="rounded-full py-2 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
                            <span
                                className="px-2 font-semibold text-md leading-8 text-indigo-600"><Link to={'/my-orders'}>Back to my orders</Link></span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}