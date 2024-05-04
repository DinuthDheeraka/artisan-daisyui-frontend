export default function ProductOverview() {
    return (
        <div className="mt-16 flex flex-row container mx-auto justify-items-start justify-start">

            <div className='w-1/2 h-full flex flex-col gap-4'>

                <div className="carousel w-full rounded" style={{height: '600px'}}>
                    <div id="slide1" className="carousel-item relative w-full h-full">
                        <img
                            src="https://assets.adidas.com/images/w_940,f_auto,q_auto/865fdf9e4a4b44e68b808eeb17a103b9_9366/ID2794_HM1.jpg"
                            className="w-full h-full" alt={''}/>
                        <div
                            className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="https://assets.adidas.com/images/w_940,f_auto,q_auto/865fdf9e4a4b44e68b808eeb17a103b9_9366/ID2794_HM1.jpg"
                            className="w-full" alt={''}/>
                        <div
                            className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

                <div tabIndex={0}
                     className="rounded collapse text-start collapse-arrow border border-base-300 bg-base-200">
                    <div className="collapse-title text-base font-medium">
                        Product Description
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>

            </div>

            <div className='w-1/2 flex flex-col items-start justify-start px-5 gap-6' style={{height: '660px'}}>
                <p className={'text-3xl font-medium'}>Avryn x Helen Kirkum Shoes</p>
                <p className={'text-xl font-medium'}>
                    SLRs 61,500 </p>
                <select className="select select-bordered btn-wide max-w-xs">
                    <option disabled selected>Select Size</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <div className='flex flex-row gap-1'>
                    <p className={'font-medium'}>
                        Availability :
                    </p>
                    <p className='font-light'>
                        Only 1 left
                    </p>
                </div>
                <button className="btn btn-active btn-wide btn-neutral rounded text-white mt-5">BUY NOW</button>
            </div>

        </div>
    );
}