import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import serverURL from "../../config/server-config.js";
import LoaderButton from "../loader-button/LoaderButton.jsx";

export default function SignupForm() {

    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [homeAddress, setHomeAddress] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [accountType, setSelectedAccountType] = useState('Buyer');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        const response = await axios.post(`${serverURL}/user/`, {
            email, password, phoneNumber, homeAddress, accountType
        })

        setIsLoading(true);

        if (response.data.success) {
            setIsLoading(false);
            navigate("/home");
        } else {
            setIsLoading(false);
            alert(response.data.message);
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/*<a className="btn btn-ghost text-xl" href={'/home'}>ZOOM</a>*/}
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign up to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <div className={'flex items-center justify-between'}>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Select account
                                </label>
                            </div>

                            <div className="mt-2">
                                <select className="select select-bordered block w-full" value={accountType}
                                        onChange={(event) => {
                                            setSelectedAccountType(event.target.value);
                                        }}>
                                    <option value="Seller">Seller</option>
                                    <option value="Buyer">Buyer</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <div className={'flex items-center justify-between'}>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                            </div>

                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value)
                                    }}
                                    autoComplete="email"
                                    required
                                    className="block w-full  py-1.5 input input-bordered sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className={'flex items-center justify-between'}>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Phone number
                                </label>
                            </div>

                            <div className="mt-2">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="phone"
                                    value={phoneNumber}
                                    onChange={(event) => {
                                        setPhoneNumber(event.target.value)
                                    }}
                                    autoComplete="phone"
                                    required
                                    className="block w-full  py-1.5 input input-bordered sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className={'flex items-center justify-between'}>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Home address
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="address"
                                    name="address"
                                    type="address"
                                    value={homeAddress}
                                    onChange={(event) => {
                                        setHomeAddress(event.target.value)
                                    }}
                                    required
                                    className="block w-full  py-1.5 input input-bordered sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className={'flex items-center justify-between'}>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                    autoComplete="new-password"
                                    required
                                    className="block w-full  py-1.5 input input-bordered sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            {isLoading ? <LoaderButton text={'Loading'}/> :
                                <button type={'button'} className="btn btn-neutral w-full" onClick={handleSignUp}>Sign
                                    up
                                </button>}
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already a member?{' '}
                        <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}