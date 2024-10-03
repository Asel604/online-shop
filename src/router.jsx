import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist"
import CheckOut from "./pages/CheckOut";

import DetailProduct from "./pages/DetailProduct";
import Cart from "./pages/Cart";


export const myRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"register",
                element:<SignUp/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"product/:id",
                element: <DetailProduct/>
            },
            {
                path:"Wishlist",
                element:<Wishlist/>
            },
            {
                path:"cart",
                element:<Cart/>
            },
            {
                path:"checkout",
                element: <CheckOut/>
            }
        ]
    }
])