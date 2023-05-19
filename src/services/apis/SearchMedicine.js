import api from '../api';

export const searchMedicineApi = api.injectEndpoints({
  endpoints: (build) => ({
    searchMedicine: build.query({
      query: (payload) => ({
        url: `search?location=${payload.location}&medicine=${payload.medicine}&category=${payload.category}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
useLazySearchMedicineQuery,

} = searchMedicineApi;

export const { endpoints } = searchMedicineApi;
