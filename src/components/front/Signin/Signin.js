import React, {useState} from 'react'
import validation from "../../validation";
import { SignIn } from '../../../services/authentication';
import { useDispatch } from 'react-redux';
import "./Signin.css";

const Signin = () => {
    
    // const [values, setValues] = useState({
    //     username:"",
    //     password:""
    // })
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const [errors, setErrors] = useState({}); //Initially set errors to an empty object

    // const handleChange = (e) => {
    //     setValues({
    //         ...values,
    //         [e.target.name]: e.target.value
    //     })
    // }

    const handleFormSubmit = (e) => {
        e.preventDefault(); 
        setErrors(validation({username, password}));
        //Pass the credentials to SignUp
        //SignIn(dispatch, {username, password});
        console.log(username);
        SignIn(dispatch, {username, password});


    }

    return (
        (
        <div className="signin-main">
            <div className="app-wrapper">
            <h2 className="title">BetSoftware Signin</h2>
                <form className="form-wrapper">
                <div>
                    <label className="label">Username</label>
                    <input className="input" type="text" name="username" value={username} onChange={event => setUsername(event.target.value)}></input>
                    {errors.username && <p className="error">{errors.username}</p>} 
                </div>
                <div>
                    <label className="label">Password</label>
                    <input className="input" type="password" name="password" value={password} onChange={event => setPassword(event.target.value)}></input>
                    {errors.password && <p className="error">{errors.password}</p>} 
                </div>
                <div>
                    <button className="submit" onClick={handleFormSubmit}>Sign In</button>
                </div>
            </form>
            </div>     
        </div>
        )
    )
}

export default Signin
