const ArtworkCard = () => {
    return (
        <div className="card w-96 bg-base-100 outline outline-1 outline-gray-200">
            <figure><img src="https://m.media-amazon.com/images/I/618-nxYP6vL._AC_UF1000,1000_QL80_.jpg" alt="Shoes"/>
            </figure>
            <div className="card-body bg-white">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ArtworkCard;