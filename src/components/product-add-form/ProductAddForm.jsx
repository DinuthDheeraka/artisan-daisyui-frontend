import {useState} from "react";
import axios from "axios";
import serverURL from "../../config/server-config.js";
import LoaderButton from "../loader-button/LoaderButton.jsx";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function ProductAddForm() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [qty, setQTY] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [gender, setSelectedGenderType] = useState('');
    const [fileOne, setFileOne] = useState(null);
    const [fileTwo, setFileTwo] = useState(null);
    const [productCategory, setSelectedProductCategory] = useState('');
    const [productSize, setSelectedSize] = useState('');
    const MySwal = withReactContent(Swal)

    // Get the JSON string from local storage
    const retrievedString = localStorage.getItem('user_data');

    // Convert the JSON string back to an object
    const retrievedObject = JSON.parse(retrievedString);

    const accessToken = retrievedObject ? retrievedObject.tokens.accessToken : null;

    const handleSaveProduct = async () => {

        // Create a new FormData object
        const formData = new FormData();

        // Append form fields
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('qty', qty);
        formData.append('gender', gender);
        formData.append('productCategory', productCategory);
        formData.append('productSize', productSize);
        formData.append('img1', fileOne);
        formData.append('img2', fileTwo);

        const response = await axios.post(`${serverURL}/product/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
                'Authorization': `bearer ${accessToken === null ? '' : accessToken}`,
            }
        });

        setIsLoading(true);

        if (response.data.success) {
            setIsLoading(false);
            MySwal.fire({
                title: <p>Saved product successfully.</p>,
                icon: 'success',
                timer: 3000,
                timerProgressive: true,
            }).then(() => {
            })
        } else {
            setIsLoading(false);
            MySwal.fire({
                title: <p>{response.data.message}</p>,
                icon: 'error',
                timer: 3000,
                timerProgressive: true,
            }).then(() => {
            })
        }
    }

    return (
        <>
            <div className="flex min-h-full items-center flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/*<a className="btn btn-ghost text-xl" href={'/home'}>ZOOM</a>*/}
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Add new product
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    <form className="flex flex-col gap-4" action="#" method="POST">

                        <div>
                            <div className={'flex items-center justify-between'}>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Product name
                                </label>
                            </div>

                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={name}
                                    onChange={(event) => {
                                        setName(event.target.value)
                                    }}
                                    required
                                    className="block w-full  py-1.5 input input-bordered sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className={'flex items-center justify-between'}>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Gender category
                                </label>
                            </div>

                            <div className="mt-2">
                                <select className="select select-bordered block w-full" value={gender}
                                        onChange={(event) => {
                                            setSelectedGenderType(event.target.value);
                                        }}>
                                    <option value="" selected disabled>Select gender category</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <div className={'flex items-center justify-between'}>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Product category
                                </label>
                            </div>

                            <div className="mt-2">
                                <select className="select select-bordered block w-full" value={productCategory}
                                        onChange={(event) => {
                                            setSelectedProductCategory(event.target.value);
                                        }}>
                                    <option value="" selected disabled>Select product category</option>
                                    <option value="Mens Performance">Mens Performance</option>
                                    <option value="Women Performance">Women Performance</option>
                                    <option value="Mens Sports">Mens Sports</option>
                                    <option value="Women Sports">Women Sports</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <div className={'flex items-center justify-between'}>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Price
                                </label>
                            </div>

                            <div className="mt-2">
                                <input
                                    id="price"
                                    name="price"
                                    type="number"
                                    value={price}
                                    onChange={(event) => {
                                        setPrice(event.target.value)
                                    }}
                                    required
                                    className="block w-full  py-1.5 input input-bordered sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className={'flex items-center justify-between'}>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Select size
                                </label>
                            </div>

                            <div className="mt-2">
                                <select className="select select-bordered block w-full" value={productSize}
                                        onChange={(event) => {
                                            setSelectedSize(event.target.value);
                                        }}>
                                    <option value="" selected disabled>Select size</option>
                                    <option value={3}>3</option>
                                    <option value={3.5}>3.5</option>
                                    <option value={4}>4</option>
                                    <option value={4.5}>4.5</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <div className={'flex items-center justify-between'}>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Quantity
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="qty"
                                    name="qty"
                                    type="number"
                                    value={qty}
                                    onChange={event => setQTY(event.target.value)}
                                    required
                                    className="block w-full  py-1.5 input input-bordered sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className={'flex items-center justify-between'}>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    View one
                                </label>
                            </div>
                            <div className="mt-2">
                                <input type="file" onChange={(event) => {
                                    setFileOne(event.target.files[0]);
                                }} className="file-input file-input-bordered w-full"/>
                            </div>
                        </div>

                        <div>
                            <div className={'flex items-center justify-between'}>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    View two
                                </label>
                            </div>
                            <div className="mt-2">
                                <input type="file" onChange={(event) => {
                                    setFileTwo(event.target.files[0]);
                                }} className="file-input file-input-bordered w-full"/>
                            </div>
                        </div>

                        <div className={'col-span-2'}>
                            <div className={'flex items-center justify-between'}>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Description
                                </label>
                            </div>
                            <div className="mt-2">
                                <textarea
                                    value={description}
                                    onChange={(event) => {
                                        setDescription(event.target.value)
                                    }}
                                    className="textarea textarea-bordered block w-full  h-40 py-1.5 sm:text-sm sm:leading-6"
                                    placeholder="Enter product description"></textarea>
                            </div>
                        </div>

                        <div className={'col-span-2'}>
                            {isLoading ? <LoaderButton text={'Loading'}/> :
                                <button type={'button'} className="btn btn-neutral w-full"
                                        onClick={handleSaveProduct}>Save
                                </button>}
                        </div>

                    </form>

                </div>
            </div>
        </>
    );
}