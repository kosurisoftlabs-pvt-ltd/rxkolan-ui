import api from '../api';

export const loyaltyApi = api.injectEndpoints({
  endpoints: (build) => ({
    loyaltyConfigure: build.mutation({
      query: (payload) => ({
        url: 'loyalty/points/configure',
        method: 'POST',
        body: payload,
      }),
    }),


    loyaltyRedeem: build.mutation({
      query: (payload) => ({
        url: 'loyalty/points/redeem',
        method: 'POST',
        body: payload,
      }),
    }),

    loyaltyDiscount: build.mutation({
      query: (payload) => ({
        url: 'loyalty/points/checkDiscount',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const {
  useLoyaltyConfigureMutation,
  useLoyaltyRedeemMutation,
  useLoyaltyDiscountMutation,
} = loyaltyApi;

export const { endpoints } = loyaltyApi;
