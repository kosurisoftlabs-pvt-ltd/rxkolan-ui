import api from '../api';

export const salesApi = api.injectEndpoints({
  endpoints: (build) => ({
    searchSales: build.mutation({
      query: (payload) => ({
        url: 'report/generate/sale',
        method: 'POST',
        body: payload,
      }),
    }),

  }),
});

export const {
useSearchSalesMutation
} = salesApi;

export const { endpoints } = salesApi;
