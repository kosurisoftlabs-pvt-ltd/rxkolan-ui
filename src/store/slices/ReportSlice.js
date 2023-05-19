import { createSlice } from '@reduxjs/toolkit';

import { endpoints } from '../../services/apis/ReportService';

const initialState = {
  reportList:[],

};

const ReportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addMatcher(endpoints.searchReport.matchFulfilled, (state, action) => {
      state.reportList = action?.payload?.purchaseReport;
    });
    builder.addMatcher(endpoints.searchReport.matchRejected, (state, action) => {
      state.reportList = []
    });

  },
});

export default ReportSlice.reducer;
