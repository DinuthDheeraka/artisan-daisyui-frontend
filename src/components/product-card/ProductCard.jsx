import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ProductCard({name, image, price, category, id}) {

    const navigate = useNavigate();

    const formattedPrice = price.toLocaleString('en-LK', {
        style: 'currency',
        currency: 'LKR'
    });


    return (
        <a onClick={() => {
            navigate(`/product/${name}`, {state: {data: {id}}})
        }}
           className="container bg-base-100 hover:outline outline-1 cursor-pointer rounded">
            <figure>
                <img
                    className="w-full rounded"
                    src={image}
                    alt="Shoes"/>
            </figure>
            <div className="pt-2 pb-4 flex flex-col items-start gap-2 px-2">
                <p className="text-sm">{name}</p>
                <strong className="text-sm text-slate-950">{formattedPrice}</strong>
                <p className="font-light text-xs">{category}</p>
            </div>
        </a>
    )
}