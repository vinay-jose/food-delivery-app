import Logo from "../../assets/eatsy.png";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { logoutUser } from "../../reducer/userSlice";
import { useDispatch, useSelector } from "react-redux";
// import SearchBar from "./SearchBar";

const Header = () => {
    const token = useSelector(state => state.user.userToken)
    const userName = useSelector(state => state.user.userName)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logoutUser())
    }
    return (
        <header>
            <div className="brand">
                <NavLink to="/">
                    <span><img id="logo" src={Logo} alt="Eatsy.com" height="100%"></img></span>
                </NavLink>
            </div>
            <div className="filler">
            </div>
            {
                token?
                <>
                    
                    <div className="login-btn-container"> 
                        <p>{`Hi, ${userName}...`}</p>                   
                        <button className="login-btn" onClick={handleClick}>Logout</button>                   
                    </div>
                </>
                :
                <div className="login-btn-container">
                    <NavLink to="/login">
                        <button className="login-btn">Login</button>
                    </NavLink>
                </div>
            }
            <Cart/>
        </header>
    )
}

export default Header;