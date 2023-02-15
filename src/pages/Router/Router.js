import { createBrowserRouter } from "react-router-dom";
import ForgetPass from "../Login/ForgetPass/ForgetPass";
import Login from "../Login/Login";
import ResetPassword from "../Login/ResetPassword/ResetPassword";
import Main from "../Main/Main";
import ProductEdit from "../ProductList/ProductEdit/ProductEdit";
import ProductList from "../ProductList/ProductList";
import Registration from "../Registration/Registration";
import EditProfile from "../UserProfile/EditProfile/EditProfile";
import UserProfile from "../UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
        path: '/forgetPass',
        element: <ForgetPass></ForgetPass>
    },
    {
        path: '/resetPass',
        element: <ResetPassword></ResetPassword>
    },
    {
        path: '/',
        element: <PrivateRoute><Main></Main></PrivateRoute>,
        children: [
            {
                path: '/productList',
                element: <PrivateRoute><ProductList></ProductList></PrivateRoute>
            },
            {
                path: '/editProduct/:id',
                element: <PrivateRoute><ProductEdit></ProductEdit></PrivateRoute>,
                loader: ({params}) => fetch(`https://cansoft-product-server.vercel.app/editProduct/${params.id}`) 
            },
            {
                path: '/userProfile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: '/editUserProfile/:id',
                element: <PrivateRoute><EditProfile></EditProfile></PrivateRoute>,
                loader: ({params}) => fetch(`https://cansoft-product-server.vercel.app/editUserProfile/${params.id}`)
            }

        ]
    },
    
])
