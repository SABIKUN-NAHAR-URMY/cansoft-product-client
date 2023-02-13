import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import Main from "../Main/Main";
import ProductList from "../ProductList/ProductList";
import Registration from "../Registration/Registration";
import UserProfile from "../UserProfile/UserProfile";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Registration></Registration>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/productList',
                element: <ProductList></ProductList>
            },
            {
                path: '/userProfile',
                element: <UserProfile></UserProfile>
            },

        ]
    },
    
])
