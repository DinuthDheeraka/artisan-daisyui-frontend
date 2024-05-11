export default function ProductCard({image}) {
    return (
        <a href={'/product'} className="container bg-base-100 hover:outline outline-1 cursor-pointer">
            <figure>
                <img
                    className="w-full rounded"
                    src={image}
                    alt="Shoes"/>
            </figure>
            <div className="pt-2 pb-4 flex flex-col items-start gap-2 px-2">
                <p className="text-sm">Adizero Fastcourt 2.0 Handball Shoes</p>
                <strong className="text-sm text-slate-950">SLRs 43,200</strong>
                <p className="font-light text-xs">Men Performance</p>
            </div>
        </a>
    )
}