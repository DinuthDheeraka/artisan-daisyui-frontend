import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import serverURL from "../../config/server-config.js"

export default function LoginForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleLogin = async () => {

        const response = await axios.post(`${serverURL}/auth/login`, {
            email, password
        });

        if (response.data.success) {
            alert('Login successful.');

            // put response data in local storage
            localStorage.setItem("user_data", JSON.stringify({
                user: response.data.user,
                tokens: response.data.tokens
            }));

            navigate("/home");
        } else {
            alert(response.data.message);
        }

    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/*<a className="btn btn-ghost text-xl" href={'/home'}>ZOOM</a>*/}
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
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
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value)
                                    }}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full  py-1.5 input input-bordered sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button type={'button'} className="btn btn-neutral w-full" onClick={handleLogin}>Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link to="/sign-up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}