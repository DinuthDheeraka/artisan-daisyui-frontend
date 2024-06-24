import Navbar from "../../components/nav-bar/Navbar.jsx";
import CartItem from "../../components/cart-item/CartItem.jsx";
import GooglePayButton from "@google-pay/button-react";
import {Link} from "react-router-dom";
import {useState} from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from "axios";
import serverURL from "../../config/server-config.js"

export default function CartPage() {

    const [isCartChanged, setIsCartChanged] = useState(false)
    const MySwal = withReactContent(Swal)

    const saveOrder = async () => {
        try {
            let items = localStorage.getItem('cart');
            items = items ? JSON.parse(items) : [];

            const retrievedString = localStorage.getItem('user_data');
            const retrievedObject = JSON.parse(retrievedString);
            const accessToken = retrievedObject ? retrievedObject.tokens.accessToken : null;
            const user = retrievedObject ? retrievedObject.user : {};

            const response = await axios.post(`${serverURL}/order`,
                {
                    user, items
                }, {
                    headers: {
                        'Content-Type': 'application/json', // Set content type to multipart/form-data
                        'Authorization': `bearer ${accessToken === null ? '' : accessToken}`,
                    }
                });

            return response.data;

        } catch (e) {
            console.log(e)
        }
    }

    function changeCartState(value) {
        setIsCartChanged((prevState) => !prevState);
    }

    let cart = localStorage.getItem('cart');

    if (!cart) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }

    let order = {};

    function getOrderTotal() {
        // eslint-disable-next-line no-unused-vars
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.selectedQty;
        })
        order.subTotal = total;
        order.deliveryTotal = 150 * cart.length;
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

                    <h2 className="title font-manrope font-bold text-2xl leading-10 mb-8 text-center text-black">Shopping
                        Cart
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
                        cart.map((item) => {
                            // eslint-disable-next-line react/jsx-key
                            return <CartItem changeCartState={changeCartState} id={item.id} image={item.image}
                                             name={item.name} size={item.size}
                                             price={item.price} qty={item.qty} selectedQty={item.selectedQty}/>
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
                        <button
                            className="rounded-full py-2 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
                            <span
                                className="px-2 font-semibold text-md leading-8 text-indigo-600"><Link to={'/home'}>Back to shopping</Link></span>
                        </button>
                        <GooglePayButton
                            buttonSizeMode={"fill"}
                            className='w-full h-full'
                            environment="TEST"
                            paymentRequest={{
                                apiVersion: 2,
                                apiVersionMinor: 0,
                                allowedPaymentMethods: [
                                    {
                                        type: 'CARD',
                                        parameters: {
                                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                        },
                                        tokenizationSpecification: {
                                            type: 'PAYMENT_GATEWAY',
                                            parameters: {
                                                gateway: 'example',
                                                gatewayMerchantId: 'exampleGatewayMerchantId',
                                            },
                                        },
                                    },
                                ],
                                merchantInfo: {
                                    merchantId: '12345678901234567890',
                                    merchantName: 'Demo Merchant',
                                },
                                transactionInfo: {
                                    totalPriceStatus: 'FINAL',
                                    totalPriceLabel: 'Total',
                                    totalPrice: `${order.total}`,
                                    currencyCode: 'LKR',
                                    countryCode: 'LK',
                                },
                            }}
                            onLoadPaymentData={paymentRequest => {

                                console.log('load payment data', paymentRequest);

                                saveOrder().then(r => {
                                    if (r.success) {
                                        MySwal.fire({
                                            title: <p className={'text-xl text-black'}>Checkout successful</p>,
                                            html: <div className={'flex-col'}>
                                                <p className={'text-base'}>Your order has been placed successfully.</p>
                                                <p className={'text-base pt-2'}>Your items will be delivered within 4
                                                    working
                                                    days.</p>
                                            </div>,
                                            icon: 'success',
                                            confirmButtonColor: '#151515'
                                        }).then(r => {
                                            console.log(r);
                                        });

                                        localStorage.setItem('cart', JSON.stringify([]));
                                        changeCartState(true)
                                    } else {
                                        MySwal.fire({
                                            title: <p className={'text-xl text-black'}>Checkout was failed!</p>,
                                            html: <div className={'flex-col'}>
                                                <p className={'text-base'}>Please try again later.</p>
                                            </div>,
                                            icon: 'error',
                                            confirmButtonColor: '#151515'
                                        }).then(r => {
                                            console.log(r);
                                        });
                                    }
                                });

                            }}
                        />
                        {/*<button*/}
                        {/*    className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">Continue*/}
                        {/*    to Payment*/}
                        {/*    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22"*/}
                        {/*         viewBox="0 0 23 22"*/}
                        {/*         fill="none">*/}
                        {/*        <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white"*/}
                        {/*              strokeWidth="1.6"*/}
                        {/*              strokeLinecap="round" strokeLinejoin="round"/>*/}
                        {/*    </svg>*/}
                        {/*</button>*/}
                    </div>
                </div>
            </section>
        </div>
    );
}