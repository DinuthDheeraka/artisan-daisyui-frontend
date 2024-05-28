import GooglePayButton from "@google-pay/button-react";
import {useEffect, useState} from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export default function ProductOverview({id}) {

    const [qty, setQTY] = useState(0);
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        qty: 0,
        size: 0,
        desc: '',
        img1: '',
        img2: ''
    })

    useEffect(() => {
        const findProductById = async () => {
            const response = await axios.get(`http://localhost:9090/api/v1/product/${id}`);
            setProduct(response.data.data);
            setQTY(response.data.data.qty);
        }
        findProductById().then(r => console.log(r));
    }, [id]);

    return (
        <div className="mt-16 flex flex-row container mx-auto justify-items-start justify-start">

            <div className='w-1/2 h-full flex flex-col gap-4'>

                <div className="w-full carousel rounded-box" style={{height: '680px'}}>
                    <div className="carousel-item w-full">
                        <img src={product.img1}
                             className="w-full bg-center" alt="Tailwind CSS Carousel component"/>
                    </div>
                    <div className="carousel-item w-full">
                        <img src={product.img2}
                             className="w-full" alt="Tailwind CSS Carousel component"/>
                    </div>
                </div>

                <div tabIndex={0}
                     className="rounded collapse text-start collapse-arrow border border-base-300 bg-base-200">
                    <div className="collapse-title text-base font-medium">
                        Product Description
                    </div>
                    <div className="collapse-content">
                        <p>{product.desc}</p>
                    </div>
                </div>

            </div>

            <div className='w-1/2 flex flex-col items-start justify-start px-5 gap-6' style={{height: '660px'}}>

                <p className={'text-3xl font-medium'}>{product.name}</p>

                <p className={'text-xl font-semibold'}>LKR {product.price.toLocaleString()}</p>

                <select className="select select-bordered btn-wide max-w-xs">
                    <option selected>Size {product.size}</option>
                </select>

                <div className='flex flex-row gap-1'>
                    <p className={'font-medium'}>
                        Availability :
                    </p>
                    <p className='font-light'>
                        Only {product.qty} left
                    </p>
                </div>

                <div className={'flex flex-row items-center justify-center gap-3.5'}>
                    <button onClick={() => {
                        if (qty < product.qty) {
                            setQTY(prevState => prevState + 1);
                        }
                    }} className={'btn btn-sm'}>+
                    </button>
                    <p className={'text-sm'}>{qty}</p>
                    <button onClick={() => {
                        if (qty > product.qty) {
                            setQTY(prevState => prevState - 1);
                        }
                    }} className={'btn btn-sm'}>-
                    </button>
                </div>

                <div className="w-72 h-60 mt-10">
                    <GooglePayButton
                        buttonSizeMode={"fill"}
                        className='w-full'
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
                                totalPrice: '100.00',
                                currencyCode: 'USD',
                                countryCode: 'US',
                            },
                        }}
                        onLoadPaymentData={paymentRequest => {
                            console.log('load payment data', paymentRequest);
                        }}
                    />
                </div>
            </div>

        </div>
    );
}