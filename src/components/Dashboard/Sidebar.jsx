import { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa'
import useAuth from '../../hooks/useAuth'

const Sidebar = () => {
    const { logOut, user } = useAuth()
    const [isActive, setActive] = useState(false)

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div className='p-4'>
                    <Link to='/' className='text-2xl font-semibold'>Task Flow</Link>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'} md:translate-x-0 transition duration-200 ease-in-out`}>
                <div>
                    <div className='hidden md:block'>
                        <Link to='/' className='text-3xl font-bold'>Task Flow</Link>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6 ml-2' >
                        <ul>
                            <li>
                                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-[#FD661F] text-lg font-bold" : "text-[#252641] text-lg font-medium"
                                }>Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/add-task" className={({ isActive }) => isActive ? "text-[#FD661F] text-lg font-bold" : "text-[#252641] text-lg font-medium"
                                }>Add Task</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='space-y-3'>
                    <hr />
                    <NavLink to="/dashboard/profile" className={({ isActive }) => isActive ? "text-[#FD661F] text-lg font-bold" : "text-[#252641] text-lg font-medium"
                    }>
                        <div className='flex gap-2 items-center'>
                        <img src={user.photoURL} alt="user photo" className='border border-black h-6 w-6 object-contain rounded-full'/><span>{user.displayName}</span>
                        </div>
                    </NavLink>
                    <button onClick={logOut} className="flex gap-2 items-center text-[#FD661F] font-semibold">Logout <FaSignOutAlt /></button>
                </div>
            </div>
        </>
    )
}

export default Sidebar
