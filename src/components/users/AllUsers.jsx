import { useAllUsersDataQuery } from "../../redux/features/users/userApi"

const AllUsers = () => {
    const { data } = useAllUsersDataQuery();
    console.log(data)
    return (
        <div>
            <h1>All Users</h1>
        </div>
    )
}

export default AllUsers
