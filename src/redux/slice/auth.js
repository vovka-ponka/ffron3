import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchUserData = createAsyncThunk('/fetchUserData', async (params) => {
  const { data } = await axios.post('/login', params);
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [fetchUserData.pending]: (state) => {
      state.status = 'loading';
      state.data = null;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'loaded';
    },
    [fetchUserData.rejected]: (state) => {
      state.data = null;
      state.status = 'error';
    },
  },
});

export const selectAuth = (state) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;
