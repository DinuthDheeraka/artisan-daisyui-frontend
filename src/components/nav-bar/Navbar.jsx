import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 outline-gray-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a className="text-sm">New</a></li>
                        <li><a className="text-sm">Men</a></li>
                        <li><a className="text-sm">Women</a></li>
                        <li>
                            <details>
                                <summary className="text-sm">Category</summary>
                                <ul className="p-2">
                                    <li><a>Sports</a></li>
                                    <li><a>Performance</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" to={'/home'}>ZOOM</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className="text-sm font-medium">New</a></li>
                    <li><a className="text-sm font-medium">Men</a></li>
                    <li><a className="text-sm font-medium">Women</a></li>
                    <li>
                        <details className={''}>
                            <summary className="text-sm font-medium">Category</summary>
                            <ul className="p-2">
                                <li><a>Sports</a></li>
                                <li><a>Performance</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn" to={'/login'}>Login</Link>
            </div>
        </div>
    );
}