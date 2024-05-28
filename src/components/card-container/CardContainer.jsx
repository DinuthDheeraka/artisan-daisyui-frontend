import ProductCard from "../product-card/ProductCard.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
export default function CardContainer({filter}) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:9090/api/v1/product', {
                    params: filter
                });
                setProducts(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData().then(r => console.log(r));

    }, [filter]);

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-center">
                {
                    // eslint-disable-next-line react/jsx-key
                    products.map((product) => <ProductCard name={product.name} price={product.price}
                                                           image={product.img1} category={product.category}
                                                           id={product._id} key={product._id}/>)
                }
            </div>
        </div>
    )
}