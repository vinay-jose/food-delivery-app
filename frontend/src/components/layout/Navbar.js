import { NavLink } from "react-router-dom";
import '../../App.css';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <ul className="navbar-list">
                {/* <li className="navbar-item"><NavLink to="/"> Home </NavLink></li> */}
                <li className="navbar-item"><NavLink to="/dishes">Dishes</NavLink></li>
                <li className="navbar-item"><NavLink to="/restaurants"> Restaurants </NavLink></li>
                <li className="navbar-item"><NavLink to="/recipes">Recipes</NavLink></li>
                <li className="navbar-item"><NavLink to="/about">About Us</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;