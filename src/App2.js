import React from 'react'
import AppHeader from "./components/front/AppHeader/AppHeader";
import AppRoute from "./components/front/AppRoute/AppRoute";
import { BrowserRouter as Router} from "react-router-dom";
//import { useSelector } from "react-redux";
//import Signin from './components/front/Signin/Signin';
//import Signup from './components/front/Signup/Signup';
//import Mainapplication from "./Mainapplication";

const App = () => {
       //const { isLoggedIn } = useSelector(state => state.authenticationSlice);
       return (
        //  <div>
        //     <Router>
        //          <AppHeader />
        //          <AppRoute />
        //     </Router>
        //  </div>

        <div>
            <App />
        </div>
    )
    // return <Router>
    //     <Switch>
    //         <Route exact path='/' render={() => (isLoggedIn ? <Mainapplication /> : <Signin />)} />
    //         <Route exact path='/signup' render={() => (isLoggedIn ? <Redirect to='/' /> : <Signup />)} />
    //         <Route exact path='/signin' render={() => (isLoggedIn ? <Redirect to='/' /> : <Signin />)} />
    //         <Route component={() => <h2> Page not found! </h2>} />
    //     </Switch> 
    // </Router>
}

export default App
