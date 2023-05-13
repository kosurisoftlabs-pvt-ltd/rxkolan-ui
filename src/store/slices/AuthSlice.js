import { createSlice } from '@reduxjs/toolkit';

import { endpoints } from '../../services/apis/AuthService';

const initialState = {
  // token: null,
  list:null,
  roleName:null,
  roleId:null,
  storeId:null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {},
  },
  extraReducers: (builder) => {
    // builder.addCase(CLEAR_TOKEN, (state) => {
    //   state.token = null;
    // });
    builder.addMatcher(endpoints.login.matchFulfilled, (state, action) => {
      state.roleName = action?.payload?.roleName;
      state.roleId = action?.payload?.roleId;
      state.storeId = action?.payload?.storeId;
    });

  },
});
export const { logout } = AuthSlice.actions;

export default AuthSlice.reducer;
