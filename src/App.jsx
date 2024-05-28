import './App.css'
import HomePage from "./pages/home-page/HomePage.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ProductOverviewPage from "./pages/product-overview-page/ProductOverviewPage.jsx";
import LoginPage from "./pages/login-page/LoginPage.jsx";
import SignUpPage from "./pages/sign-up-page/SignUpPage.jsx";
import ProductAddPage from "./pages/product-add-page/ProductAddPage.jsx";

const router = createBrowserRouter([
    {
        path: '/home', element: <HomePage/>
    },
    {
        path: '/product/*', element: <ProductOverviewPage/>
    },
    {
        path: '/login', element: <LoginPage/>
    },
    {
        path: '/sign-up', element: <SignUpPage/>
    },
    {
        path: '/product-save', element: <ProductAddPage/>
    },
])


function App() {

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default App
