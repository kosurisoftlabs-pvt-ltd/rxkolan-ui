import { createSlice } from '@reduxjs/toolkit';

import { endpoints } from '../../services/apis/LoyalityPoints';

const initialState = {
  loyaltyDiscountList:{},

};

const LoyaltySlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addMatcher(endpoints.loyaltyDiscount.matchFulfilled, (state, action) => {
      state.loyaltyDiscountList = action?.payload;
    });

  },
});

export default LoyaltySlice.reducer;
