import {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'

// eslint-disable-next-line react/prop-types
export default function ProductOverview({id}) {

    const MySwal = withReactContent(Swal)
    const [qty, setQTY] = useState(1);
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
            // get access token
            const userData = JSON.parse(localStorage.getItem('user_data'));
            const accessToken = userData.tokens['accessToken'];

            const response = await axios.get(`http://localhost:9090/api/v1/product/${id}`, {
                headers: {
                    'Authorization': `bearer ${accessToken}`,
                }
            });
            setProduct(response.data.data);
            setQTY(response.data.data.qty);
        }
        findProductById().then(r => console.log(r));
    }, [id]);

    return (
        <div className="mt-16 flex flex-row container mx-auto justify-items-start justify-start">

            <div className='w-1/2 h-full flex flex-col gap-4'>

                <div className="w-full carousel rounded-box gap-2" style={{height: '680px'}}>
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

                <p className={'text-3xl font-semibold'}>{product.name.toUpperCase()}</p>

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
                        if (qty > 1) {
                            setQTY(prevState => prevState - 1);
                        }
                    }} className={'btn btn-sm'}>-
                    </button>
                    <p className={'text-sm'}>{qty}</p>
                    <button onClick={() => {
                        if (qty < product.qty) {
                            setQTY(prevState => prevState + 1);
                        }
                    }} className={'btn btn-sm'}>+
                    </button>
                </div>

                <div className="w-72 h-60 mt-10">
                    <button onClick={() => {
                        MySwal.fire({
                            title: <p className={'text-xl text-black'}>Do you want to add this item to the cart!</p>,
                            html: `<!--<div class="flex-col gap-3"><p class="text-base font-semibold">${product.name}</p><p class="text-base text-black font-light">Quantity : ${qty}</p></div>-->`,
                            icon: 'info',
                            showCancelButton: true,
                            confirmButtonColor: '#0e0e0e',
                            confirmButtonText: 'Yes',
                            cancelButtonText: 'No',
                            cancelButtonColor: '#ff3434',
                            showConfirmButton: true,
                        }).then(r => {
                            console.log(r)
                            if (r.isConfirmed) {

                                // add item to the cart
                                let cart = localStorage.getItem('cart');
                                if (cart) {

                                    cart = JSON.parse(cart);

                                    if (cart.length >= 0) {
                                        cart.push({
                                            id: product._id,
                                            name: product.name,
                                            size: product.size,
                                            price: product.price,
                                            qty: product.qty,
                                            selectedQty: qty,
                                            image: product.img1
                                        });

                                        localStorage.setItem('cart', JSON.stringify(cart));
                                    }

                                } else {
                                    localStorage.setItem('cart', JSON.stringify([{
                                        id: product._id,
                                        name: product.name,
                                        category: product.size,
                                        price: product.price,
                                        qty: product.qty,
                                        selectedQty: qty,
                                        image: product.img1
                                    }]))
                                }

                                return MySwal.fire({
                                    title: <p className={'text-xl text-black'}>Added item successfully.</p>,
                                    icon: 'success',
                                    timer: 3000,
                                    confirmButtonColor: '#161616',
                                })
                            }
                        });
                    }} className="btn w-full text-base btn-neutral">Add to cart
                    </button>
                </div>
            </div>

        </div>
    );
}