import Logo from "../../assets/eatsy.png";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
// import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <header>
            <div className="brand">
                <NavLink to="/">
                    <span><img id="logo" src={Logo} alt="Eatsy.com" height="100%"></img></span>
                </NavLink>
            </div>
            <div className="filler">
            </div>
            <div className="login-btn-container">
                <NavLink to="/login">
                    <button className="login-btn">Login</button>
                </NavLink>
            </div>
            <Cart/>
        </header>
    )
}

export default Header;