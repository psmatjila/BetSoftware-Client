import React from 'react'
import { Link } from "react-router-dom";
//import { logout } from "../../authenticationSlice";
//import { useSelector, useDispatch} from "react-redux";
import "./Header.css"


    const Header = () => {
    //const { isLoggedIn } = useSelector(state => state.authenticationSlice);
    //const dispatch = useDispatch();

    return (
        <div>
            <header className="header">
                <div>
                    <h1 className="logo">
                        BetSoftware
                    </h1>
                </div>
                <div className="header-links">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/signin">Signin</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/cart" className="cart">
                                <i class="fas fa-shopping-cart"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header
