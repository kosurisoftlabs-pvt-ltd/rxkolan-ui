import api from '../api';

export const stockApi = api.injectEndpoints({
  endpoints: (build) => ({
    searchStock: build.mutation({
      query: (payload) => ({
        url: 'report/generate/stock',
        method: 'POST',
        body: payload,
      }),
    }),

  }),
});

export const {
useSearchStockMutation
} = stockApi;

export const { endpoints } = stockApi;
