import { Fragment, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

const Auth = () => {
    const [details, setDetails] = useState({
        email: "",
        password: ""
    })

    const location = useLocation()

    const handleInput = e => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmission = () => {
        console.log(details)
    }

    return (
        <Fragment>
            <div className="auth-container">
                <div className="auth-container--box">
                    <div className="tab-selector">
                        <NavLink to={"/login"}><h3>Login</h3></NavLink>
                        <NavLink to={"/signup"}><h3>Signup</h3></NavLink>
                    </div>
                    <form autoComplete={"off"} onSubmit={handleSubmission}>
                        <div className="input-wrap">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Enter Email" 
                                value={details.email} 
                                onChange={handleInput}
                            />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter Password" 
                                value={details.password}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="button-wrap">
                            <NavLink to="/">
                                <button className="login-btn">
                                    {location.pathname === "/login" ? "Login" : "Signup"}
                                </button>
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Auth;