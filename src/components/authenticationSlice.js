import { createSlice } from '@reduxjs/toolkit';

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        token: '',
        isLoggedIn: false,
    },
    reducers: { // our reducer will store two functions
        //when  the user is userAuthenticated
        //and when the user is logs out
        userAuthenticated: (state, action) => {
            sessionStorage.setItem('token', action.payload.token);
            console.log("Token value when sign up " + sessionStorage.setItem('token'));
            return {
                ...state, ...{ //update the state
                    token: action.payload.token,
                    isLoggedIn: true,
                }
            }
        },
        logout: ()=> {
            sessionStorage.clear();
        }
    }
});

export const {userAuthenticated, logout} = authenticationSlice.actions;
export default authenticationSlice.reducer;