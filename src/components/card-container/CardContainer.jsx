import {useEffect, useState} from "react";
import axios from "axios";
import HomeLoadingSkeleton from "../home-loading-skelton/HomeLoadingSkeleton.jsx";
import ProductCard from "../product-card/ProductCard.jsx";

// eslint-disable-next-line react/prop-types
export default function CardContainer({filter}) {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                // get access token
                const userData = JSON.parse(localStorage.getItem('user_data'));
                const accessToken = userData.tokens['accessToken'];

                const response = await axios.get('http://localhost:9090/api/v1/product', {
                    params: filter,
                    headers: {
                        'Authorization': `bearer ${accessToken}`,
                    }
                });
                setProducts(response.data.data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(true)
                console.error('Error fetching data:', error);
            }
        };

        fetchData().then(r => console.log(r));

    }, [filter]);

    return (
        <div className="container mx-auto p-6">
            {isLoading ? <HomeLoadingSkeleton/> :
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-center">
                    {
                        // eslint-disable-next-line react/jsx-key
                        products.map((product) => <ProductCard name={product.name} price={product.price}
                                                               image={product.img1} category={product.category}
                                                               id={product._id} key={product._id}/>)
                    }
                </div>}
        </div>
    )
}