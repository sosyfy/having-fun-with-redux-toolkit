//  ! note THIS CODE DOESN'T WORK RUNNING IT HERE 
/* Here is the store  declaration  */

// THIS IS  THE STORE.JS FILE 
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const myStore = configureStore({
    reducer: {
       counter: counterReducer,
    }
})

export default myStore 

// THIS IS THE INDEX.JS FILE 

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import myStore from "./store";

import App from "./App";

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// THIS IS THE COUNTERSLICE.JS  FILE 
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: 0 ,
    reducers: {
        increment: state => state + 1 
    }
})

export const { increment } = counterSlice.actions
export default counterSlice.reducer

// THIS IS THE COMPONENT.JS FILE 

import { useSelector, useDispatch } from "react-redux";
import { increment } from "./counterSlice";

export default function MyCounter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}


// ? HERE IS AN EXAMPLE THUNK CODE 

import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


export const register = createAsyncThunk(
 "register-user",
 async ( formData , {dispatch,getState}) => {
  try {
    dispatch(fetchDataStart())
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    dispatch(fetchDataSuccess(data))
    return data;
  } catch (err) {
    dispatch(fetchDataError(err.message));
  }
});




const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.isLoading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchDataError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataError } = dataSlice.actions;

export default dataSlice.reducer;
