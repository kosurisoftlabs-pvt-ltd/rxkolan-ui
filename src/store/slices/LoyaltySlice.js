import { createSlice } from '@reduxjs/toolkit';

import { endpoints } from '../../services/apis/LoyalityPoints';

const initialState = {
  customerLoyaltyResponseList:{},

};

const LoyaltySlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addMatcher(endpoints.loyaltyDiscount.matchFulfilled, (state, action) => {
      state.customerLoyaltyResponseList = action?.payload?.customerLoyaltyResponseList[0];
    });

  },
});

export default LoyaltySlice.reducer;
