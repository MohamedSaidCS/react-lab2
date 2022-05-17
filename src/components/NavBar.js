import { NavLink } from 'react-router-dom';
import '../App.css';

function NavBar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <NavLink className='nav-link font' to="/"><h4>Home</h4></NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to="/about"><h4>About</h4></NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to="error"><h4>Error</h4></NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
