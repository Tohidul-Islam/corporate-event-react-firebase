import { Link, NavLink, useNavigate } from "react-router-dom";
import defaultUserImg from '../assets/defaultPerson.jpg'
import logo from '../assets/mainLogo.png'
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogOut = e => {
        e.preventDefault()
        logOut()
            .then(result => console.log('Logout', result.user))
            .catch(error => console.log(error.message, 'Logout success'))
        navigate('/login')
    }

    const navbar = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {
            user && <>
                <li><NavLink to='/services'>Services</NavLink></li>
                <li><NavLink to='/allEvents'>Events</NavLink></li>
            </>
        }
        <li><NavLink to='/about'>About Company</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100 max-w-6xl mx-auto border-b-2 border-gray-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <div>
                    <Link to='/'>
                        <img src={logo} alt="logo" className="w-64" />
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <Link onClick={handleLogOut} className="btn btn-warning">Logout</Link> : <Link to='/login' className="btn btn-warning">Login</Link>
                }
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={user ? user.photoURL : defaultUserImg} />
                    </div>
                </div>
                <h2 className="text-orange-500 font-bold px-2">{user ? user.displayName : ''}</h2>
            </div>
        </div>
    );
};

export default Header;