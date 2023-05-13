import { createSlice } from '@reduxjs/toolkit';

import { endpoints } from '../../services/apis/StockService';

const initialState = {
  stockList:[],

};

const StockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addMatcher(endpoints.searchStock.matchFulfilled, (state, action) => {
      state.stockList = action?.payload?.stockReport;
    });

  },
});

export default StockSlice.reducer;
