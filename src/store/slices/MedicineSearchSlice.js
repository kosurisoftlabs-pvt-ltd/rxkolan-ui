import { createSlice } from '@reduxjs/toolkit';

import { endpoints } from '../../services/apis/SearchMedicine';

const initialState = {
  medicineList:[],

};

const MedicineSearchSlice = createSlice({
  name: 'medicineSearch',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addMatcher(endpoints.searchMedicine.matchFulfilled, (state, action) => {
      state.medicineList = action?.payload?.searchResultList;
    });
    builder.addMatcher(endpoints.searchMedicine.matchRejected, (state, action) => {
      state.medicineList = []
    });

  },
});

export default MedicineSearchSlice.reducer;
