import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AllUsers from "../components/users/AllUsers";
import AddUser from "../components/users/AddUser";
import UpdateUser from "../components/users/UpdateUser";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout></Layout>,
        children : [
            {
                path : "all-user",
                element : <AllUsers></AllUsers>
            },
            {
                path:"add-user",
                element : <AddUser></AddUser>
            },
            {
                path : "update-user/:id",
                element : <UpdateUser></UpdateUser>
            }
        ]
    }
])