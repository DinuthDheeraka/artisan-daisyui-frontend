import {Link, useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// eslint-disable-next-line react/prop-types
export default function Navbar({handleFilterChange, handleIconOnClick}) {

    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)

    // Get the JSON string from local storage
    const retrievedString = localStorage.getItem('user_data');

    // Convert the JSON string back to an object
    const retrievedObject = JSON.parse(retrievedString);

    const userData = retrievedObject ? retrievedObject.user : null;

    return (
        <div className="navbar bg-base-100 outline-gray-300 relative z-50">
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
                <Link className="btn btn-ghost text-xl" to={'/home'} onClick={handleIconOnClick}>ZOOM</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className="text-sm font-medium">New</a></li>
                    <li><a className="text-sm font-medium" onClick={() => {
                        handleFilterChange({
                            gender: 'Male'
                        });
                    }}>Men</a></li>
                    <li><a className="text-sm font-medium" onClick={() => {
                        handleFilterChange({
                            gender: 'Female'
                        });
                    }}>Women</a></li>
                    <li>
                        <details className={''}>
                            <summary className="text-sm font-medium">Category</summary>
                            <ul className="p-2 w-72">
                                <li><a onClick={() => {
                                    handleFilterChange({category: 'Mens Sports'});
                                }}>Mens Sports</a></li>
                                <li><a onClick={() => {
                                    handleFilterChange({category: 'Mens Performance'});
                                }}>Mens Performance</a></li>
                                <li><a onClick={() => {
                                    handleFilterChange({category: 'Women Sports'});
                                }}>Women Sports</a></li>
                                <li><a onClick={() => {
                                    handleFilterChange({category: 'Women Performance'});
                                }}>Women Performance</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {userData ? <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-8">
                                <span>{userData ? userData.email.substring(0, 2).toUpperCase() : 'N/A'}</span>
                            </div>
                        </div>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        {userData.accountType === "Seller" ?
                            <li><Link to={'/product-save'}>Add product</Link></li> : undefined}
                        <li><Link to={'/cart'}>Cart</Link></li>
                        <li><Link to={'/my-orders'}>My orders</Link></li>
                        <li><a>Settings</a></li>
                        <li onClick={() => {
                            // Display the confirmation dialog
                            MySwal.fire({
                                title: <p className={'text-base text-black'}>Do you need to logout!</p>,
                                confirmButtonColor: '#151515',
                                confirmButtonText: 'Yes',
                                showCancelButton: true,
                                cancelButtonColor: '#ff3e3e',
                                cancelButtonText: 'No',
                            }).then(res => {
                                if (res.isConfirmed) {
                                    // The user clicked "OK"
                                    localStorage.clear();
                                    navigate("/login");
                                }
                            });

                        }}><a>Logout</a></li>
                    </ul>
                </div> : <Link className="btn" to={'/login'}>Login</Link>}
            </div>
        </div>
    );
}