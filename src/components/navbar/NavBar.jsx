import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='bg-black bg-opacity-70 text-white ' >
            <nav>
                <ul className='flex justify-center items-center gap-5 py-4 ' >
                    <li> <NavLink to={`/`}>Home</NavLink> </li>
                    <li> <NavLink to={`/all-user`}>All Users</NavLink> </li>
                    <li> <NavLink to={`/add-user`}>Add User</NavLink> </li>
                    <li> <NavLink to={`/update-user`}>Update User</NavLink> </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
