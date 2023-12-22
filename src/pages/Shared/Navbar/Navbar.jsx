import 'flowbite';
import { navLinks } from '../../../constants';
import { Link, NavLink } from 'react-router-dom';
import Container from '../../../components/Container';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth()
    return (
        <nav className="bg-pink-400 border-gray-200 p-4">
            <Container>
                <div className="flex flex-wrap items-center justify-between">

                    {/* Logo */}
                    <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="TaskFlow" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TaskFlow</span>
                    </Link>

                    {/* user photo */}
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            {user ?
                                <img className="w-8 h-8 rounded-full" src={user?.photoURL} alt="user photo" />
                                :
                                <img src="userphoto" alt="userphoto" />
                            }
                        </button>

                        {/* Dropdown menu  */}
                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                            {user && <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">{user?.displayName}</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                            </div>}
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                {user && <li>
                                    <a to='/dashboard' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>}
                                {user ?
                                    <li>
                                        <a onClick={logOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                    </li>
                                    :
                                    <li>
                                        <Link to='/login' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Login</Link>
                                    </li>

                                }
                            </ul>
                        </div>
                        {/* <>
                            <Link to='/login'>
                                <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
                            </Link>
                        </> */}
                        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    {/* menu */}
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="absolute right-4 md:relative flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-inherit">
                            {
                                navLinks.map(link => (
                                    <li key={link.id}>
                                        <NavLink
                                            to={`${link.to}`}
                                            className={({ isActive }) => isActive ? "block py-2 px-3 text-blue-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"}>
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </Container>
        </nav >

    );
};

export default Navbar;