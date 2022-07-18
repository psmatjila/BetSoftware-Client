import React from 'react';
import { Link } from "react-router-dom";
import "./AppHeader.css";

const AppHeader = () => {
    return (
             <div className="signin-or-up">
               <div>
                    <h1 className="logo">
                        BetSoftware
                    </h1>
                </div>
                <div className="header-links">
                <ul>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/signin">Signin</Link>
                        </li>
                    </ul>
                </div>
               
            </div>     
    )
}

export default AppHeader

