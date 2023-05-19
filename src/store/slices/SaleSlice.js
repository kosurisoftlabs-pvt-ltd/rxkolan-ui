import { createSlice } from '@reduxjs/toolkit';

import { endpoints } from '../../services/apis/SaleService';

const initialState = {
  salesList:[],

};

const SaleSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addMatcher(endpoints.searchSales.matchFulfilled, (state, action) => {
      state.salesList = action?.payload?.saleReport;
    });
    builder.addMatcher(endpoints.searchSales.matchRejected, (state, action) => {
      state.salesList = [];
    });

  },
});

export default SaleSlice.reducer;
