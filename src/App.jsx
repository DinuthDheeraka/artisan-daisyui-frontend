import './App.css'
import HomePage from "./pages/home-page/HomePage.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ProductOverviewPage from "./pages/product-overview-page/ProductOverviewPage.jsx";
import LoginPage from "./pages/login-page/LoginPage.jsx";
import SignUpPage from "./pages/sign-up-page/SignUpPage.jsx";
import ProductAddPage from "./pages/product-add-page/ProductAddPage.jsx";
import CartPage from "./pages/cart-page/CartPage.jsx";
import MyOrdersPage from "./pages/my-orders-page/MyOrdersPage.jsx";
import OrderDetailsPage from "./pages/order-details-page/OrderDetailsPage.jsx";

const router = createBrowserRouter([
    {
        path: '/home', element: <HomePage/>
    },
    {
        path: '/cart', element: <CartPage/>
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
    {
        path: '/my-orders', element: <MyOrdersPage/>
    },
    {
        path: '/order-detail/*', element: <OrderDetailsPage/>
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
