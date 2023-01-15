

import  { createAsyncThunk } from '@reduxjs/toolkit'

const postData = createAsyncThunk("postData", async (data , { dispatch , getState })=> {
    try {
        const response = await axios.post('/api/data', data);
        return response.data;
      } catch (error) {
        throw error
      }
})


import { createSlice } from "@reduxjs/toolkit";

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
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});



// here is an example in react 


import { useDispatch } from 'react-redux'

export default function MyComponent() {
  const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    try {
        await dispatch(postData(data))
        // do something after the data is posted successfully
    } catch (error) {
        console.log(error);
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {/* form inputs */}
    </form>
  )
}