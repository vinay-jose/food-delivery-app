import Logo from "../../assets/eatsy.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="footer">
                <div className="row">
                    <ul>
                    <li><NavLink to="/about">About us</NavLink></li>
                    <li><NavLink to="/about">Our Services</NavLink></li>
                    <li><NavLink to="/about">Terms & Conditions</NavLink></li>
                    <li><NavLink to="/about">Help Center</NavLink></li>
                    <li><NavLink to="/">Careers</NavLink></li>
                    </ul>
                </div>

                <div className="row">
                    <NavLink to="/">
                        <span><img id="logo" src={Logo} alt="Eatsy.com" height="50px"></img></span>
                    </NavLink>
                </div>

                <div className="row">
                    Eatsy.com Copyright © 2024 Eatsy | All rights reserved.
                </div>
                {/* <div className="footer_bg">
                </div> */}
        </footer>

    )
}

export default Footer