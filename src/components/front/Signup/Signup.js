import React, {useState} from 'react'
//import { SignUp } from '../services/authentication';
import { SignUp } from '../../../services/authentication'
import validation from "../../validation";
import { useDispatch } from 'react-redux';
import "./Signup.css";

const Signup = () => {
    
    // const [values, setValues] = useState({
    //     email:"",
    //     username:"",
    //     password:""
    // })

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordconfirm, setPasswordConfirm] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    const [errors, setErrors] = useState({}); //Initially set errors to an empty object

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(validation({email, username, password,passwordconfirm}));
        //SignUp(dispatch, {email, username, password});
        SignUp(dispatch, {username, password, email});
    }

    return (
        (
        <div className="signup-main">
            <div className="app-wrapper">
            <h2 className="title">BetSoftware Signup</h2>
                <form className="form-wrapper">
                <div>
                    <label className="label">Email</label>
                    <input className="input" type="text" name="email" value={email} onChange={event => setEmail(event.target.value)}></input>
                       {errors.email && <p className="error">{errors.email}</p>}
                </div>
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
                    <label className="label">Confirm Password</label>
                    <input className="input" type="password" name="passwordconfirm" value={passwordconfirm} onChange={event => setPasswordConfirm(event.target.value)}></input>
                    {/* {errors.password && <p className="error">{errors.password}</p>} */}
                </div>
                <div>
                    <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
                </div>
            </form>
            </div>     
        </div>
        )
    )
}

export default Signup

