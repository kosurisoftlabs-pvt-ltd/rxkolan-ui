import { createSlice } from '@reduxjs/toolkit';

import { endpoints } from '../../services/apis/StoreService';

const initialState = {
  storeList:[],
  allStoreIds:[]

};

const StoreSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addMatcher(endpoints.getAllStores.matchFulfilled, (state, action) => {
      state.storeList = action?.payload?.stores;
      state.allStoreIds = action?.payload?.stores.map((item)=>item.id);

    });

  },
});
// export const { logout } = StoreSlice.actions;

export default StoreSlice.reducer;
