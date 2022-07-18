import * as axios from 'axios';
import { userAuthenticated } from '../components/authenticationSlice';

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/Authentication`,
    headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
})

export const SignUp = async (dispatch, credentials) => {
    try{
          //api call
          const { data } = await axiosInstance.post('/signup', credentials);
          dispatch(userAuthenticated(data));
          sessionStorage.setItem('token', data.token);
          

    } catch {
        console.log("Error!!");
    }
}

export const SignIn = async (dispatch, credentials) => {
    try{
          //api call
          console.log("Value stored inside our toke " + sessionStorage.getItem('token'));
          const { data } = await axiosInstance.post('/signin', credentials);
          dispatch(userAuthenticated(data));
          console.log("data", data);
          console.log("dataxx", userAuthenticated);

    } catch {
        console.log("Error!!");
    }
}