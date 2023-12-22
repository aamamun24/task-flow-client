import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layouts/Dashboard";
import Profile from "../pages/Dashboard/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import AddTask from "../pages/Dashboard/AddTask/AddTask";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Task from "../pages/Dashboard/Task/Task";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: 'profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: 'task',
                element: <PrivateRoute><Task /></PrivateRoute>
            },
            {
                path: 'add-task',
                element: <PrivateRoute><AddTask /></PrivateRoute>
            },
        ]
    }
])

export default router;