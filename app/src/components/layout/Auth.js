import { Fragment, useState } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";

const Auth = () => {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: "",
        cnf_password: ""
    })

    const location = useLocation()
    const navigate = useNavigate()

    const handleInput = e => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        console.log(details)
        navigate("/")
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
                        {
                            location.pathname === "/signup" &&
                            <div className="input-wrap">
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Enter your name" 
                                    value={details.name} 
                                    onChange={handleInput}
                                />
                            </div>
                        }
                        <div className="input-wrap">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Enter email" 
                                value={details.email} 
                                onChange={handleInput}
                            />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter password" 
                                value={details.password}
                                onChange={handleInput}
                            />
                        </div>
                        {
                            location.pathname === "/signup" &&
                            <div className="input-wrap">
                                <label htmlFor="cnf_password">Re-enter password</label>
                                <input 
                                    type="text" 
                                    name="cnf_password" 
                                    placeholder="Re-enter your password" 
                                    value={details.cnf_password} 
                                    onChange={handleInput}
                                />
                            </div>
                        }
                        <div className="button-wrap">
                            <button type="submit" className="login-btn" >
                                {location.pathname === "/login" ? "Login" : "Signup"} 
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Auth;