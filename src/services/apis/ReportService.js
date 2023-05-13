import api from '../api';

export const reportApi = api.injectEndpoints({
  endpoints: (build) => ({
    searchReport: build.mutation({
      query: (payload) => ({
        url: 'report/generate/purchase',
        method: 'POST',
        body: payload,
      }),
    }),

  }),
});

export const {
useSearchReportMutation
} = reportApi;

export const { endpoints } = reportApi;
