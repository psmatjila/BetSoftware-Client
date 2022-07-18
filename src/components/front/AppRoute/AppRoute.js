import React from 'react'
import { Route, Switch} from "react-router-dom";
import Signup from "../Signup/Signup";
import Signin from "../Signin/Signin";
import { useSelector } from "react-redux";
import Mainapplication from "../../../App";

const AppRoute = () => {

    const { isLoggedIn } = useSelector(state => state.authentication);

    return (
             <div>
            <Switch>     
                <Route path="/signin" exact>
                    <Signin />
                </Route>
                <Route path="/signup" exact>
                    <Signup />
                </Route>
                <Route exact path='/' render={() => (isLoggedIn ? <Mainapplication /> : <Signin />)} />
            </Switch>
        </div>       
    )
}

export default AppRoute
