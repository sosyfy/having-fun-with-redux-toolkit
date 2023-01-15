// Redux Toolkit is a package that simplifies the setup and configuration of a Redux store in a React application. It includes several features that make it easier to work with Redux, such as:

// A configurable, pre-built store with sensible defaults
// Automatic handling of the redux-thunk middleware for async actions
// A createAsyncThunk utility for creating async actions
// A createSlice utility for creating and managing reducers


import { configureStore } from '@reduxjs/toolkit'


import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    isLoading: false,
    isAuthenticated: false,
    error: null,
  };
  
const loginSlice = createSlice({
    name: "loginslice",
    initialState,
    reducers:{
        loginStart: (state) => {
            state.isLoading = true;
          },
          loginSuccess: (state) => {
            state.isLoading = false;
            state.isAuthenticated = true;
          },
          loginError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          },
          logout: (state) => {
            state.isAuthenticated = false;
          },      
    }

})
const { incr } = counterSlice.actions
const { loginStart, loginSuccess, loginError, logout } = loginSlice.actions;


import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    "fetchData", 
    async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    return data;
});

export const login = createAsyncThunk(
    "login", 
    async (credentials, {dispatch,getState}) => {
    try {
      dispatch(loginStart());
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      dispatch(loginSuccess());
      return data;
    } catch (err) {
      dispatch(loginError(err.message));
    }
  });
  

const store = configureStore({
    reducer: {
       counter: counterSlice.reducer,
       login: loginSlice.reducer
    }
})


// points to note 

/**
 * first create a store using the configure store method and export the store 
 * got to app and import the provider from react-redux and wrap the app width: 
 * the provider  as shown below 
 * 
 *    <Provider store={store}> <App /> </Provider>,
 *
 * 
 */
 
