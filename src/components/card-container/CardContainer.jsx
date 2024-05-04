import ProductCard from "../product-card/ProductCard.jsx";

export default function CardContainer() {
    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-center">
                <ProductCard image={'https://assets.adidas.com/images/w_940,f_auto,q_auto/865fdf9e4a4b44e68b808eeb17a103b9_9366/ID2794_HM1.jpg'}/>
                <ProductCard image={'https://assets.adidas.com/images/w_940,f_auto,q_auto/71393cd49eda43ce9976b04d4a24464e_9366/ID8410_01_standard.jpg'}/>
                <ProductCard image={'https://assets.adidas.com/images/w_940,f_auto,q_auto/1da7c31402154913981daf480093bc87_9366/HP5439_01_standard.jpg'}/>
                <ProductCard image={'https://assets.adidas.com/images/w_940,f_auto,q_auto/71393cd49eda43ce9976b04d4a24464e_9366/ID8410_01_standard.jpg'}/>
                <ProductCard image={'https://assets.adidas.com/images/w_940,f_auto,q_auto/865fdf9e4a4b44e68b808eeb17a103b9_9366/ID2794_HM1.jpg'}/>
                <ProductCard image={'https://assets.adidas.com/images/w_940,f_auto,q_auto/71393cd49eda43ce9976b04d4a24464e_9366/ID8410_01_standard.jpg'}/>
                <ProductCard image={'https://assets.adidas.com/images/w_940,f_auto,q_auto/1da7c31402154913981daf480093bc87_9366/HP5439_01_standard.jpg'}/>
                <ProductCard image={'https://assets.adidas.com/images/w_940,f_auto,q_auto/71393cd49eda43ce9976b04d4a24464e_9366/ID8410_01_standard.jpg'}/>
            </div>
        </div>
    )
}