export default function HomeCarousel() {
    return (
        <div className={'container mx-auto p-6'}>
            <div className="carousel container mx-auto rounded h-80">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className={'w-full flex flex-row gap-2'}>
                        <img
                            src="https://1.bp.blogspot.com/-UJyRP7L1nW4/XjAzB4XIb7I/AAAAAAAAJQ4/F8nDvT9A_FAw5MNIXZcLxKCHVWx7DforgCLcBGAsYHQ/s1600/adidas-Training-Cover.jpg"
                            className="w-full rounded object-cover"/>
                        <img
                            src="https://wwd.com/wp-content/uploads/2022/05/H23576-05_PA_SS22_PDX_ENERGY_JS_WINGS_GX9445_GY4419_FEB_GROUP_00538_WILD_16x9-1004843.jpg"
                            className="w-full rounded object-cover"/>
                    </div>
                    <div
                        className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
}