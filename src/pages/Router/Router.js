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
        element: <Main></Main>,
        children: [
            {
                path: '/productList',
                element: <PrivateRoute><ProductList></ProductList></PrivateRoute>
            },
            {
                path: '/editProduct/:id',
                element: <ProductEdit></ProductEdit>,
                loader: ({params}) => fetch(`http://localhost:5000/editProduct/${params.id}`) 
            },
            {
                path: '/userProfile',
                element: <UserProfile></UserProfile>
            },
            {
                path: '/editUserProfile/:id',
                element: <EditProfile></EditProfile>,
                loader: ({params}) => fetch(`http://localhost:5000/editUserProfile/${params.id}`)
            }

        ]
    },
    
])
