// eslint-disable-next-line react/prop-types
export default function OrderDetailTableItem({image, name, price, qty, selectedQty}) {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
            <div
                className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                <div className="img-box"><img src={image}
                                              alt="perfume bottle image" className="xl:w-[140px]"/></div>
                <div className="pro-data w-full max-w-sm ">
                    <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{name}
                    </h5>
                    <p
                        className="font-normal text-base leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                    </p>
                    <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">LKR {price.toLocaleString()}</h6>
                </div>
            </div>
            <div
                className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                    LKR 150.00 <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">(Delivery
                            Charge)</span></h6>
                <div className="flex items-center w-full mx-auto justify-center">

                    <input type="text"
                           className="border border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                           placeholder={selectedQty}/>
                </div>
                <h6
                    className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                    LKR {((price * qty) + 150).toLocaleString()}</h6>
            </div>
        </div>
    );
}