import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AllUsers from "../components/users/AllUsers";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout></Layout>,
        children : [
            {
                path : "all-user",
                element : <AllUsers></AllUsers>
            }
        ]
    }
])