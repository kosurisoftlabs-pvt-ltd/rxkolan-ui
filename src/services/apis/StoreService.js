import api from '../api';

export const storeApi = api.injectEndpoints({
  endpoints: (build) => ({
    addStore: build.mutation({
      query: (payload) => ({
        url: 'store/create',
        method: 'POST',
        body: payload,
      }),
    }),
    updateStore: build.mutation({
      query: (payload) => ({
        url: 'store/update',
        method: 'POST',
        body: payload,
      }),
    }),
    getAllStores: build.query({
        query: () => ({
          url: `store/all`,
          method:"GET"
        }),
      }),
      addStoreManager: build.mutation({
        query: (payload) => ({
          url: 'user/add',
          method: 'POST',
          body: payload,
        }),
      }),
  }),
});

export const {
  useAddStoreMutation,
  useUpdateStoreMutation,
  useLazyGetAllStoresQuery,
  useAddStoreManagerMutation,
} = storeApi;

export const { endpoints } = storeApi;
