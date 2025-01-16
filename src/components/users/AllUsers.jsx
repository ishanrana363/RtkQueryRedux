import { Link } from "react-router-dom";
import { useAllUsersDataQuery } from "../../redux/features/users/userApi"
import Loader from "../skeleton/Loader";

const AllUsers = () => {
    const { data, isLoading, error } = useAllUsersDataQuery();
    console.log(data?.data);
    if (error) {
        return <Loader></Loader>
    }
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className="w-11/12 mx-auto my-10 " >
            <div className=" grid lg:grid-cols-5 gap-5 " >
                {
                    data?.data?.map((user, index) => (
                        <div key={index} className="shadow-lg p-6 bg-gray-50 " >
                            <h3 className="text-center" >{user.name}</h3>
                            <p>{user.email}</p>
                            <div className="my-3" >
                                <Link to={`/update-user/${user?._id}`}><button className=" py-1  px-2 font-bold bg-green-500  " >Update User</button></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllUsers
