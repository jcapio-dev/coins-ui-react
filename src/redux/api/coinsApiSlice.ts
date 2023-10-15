import baseAPISlice from "./baseApiSlice";

// Define a service using a base URL and expected endpoints
export const coinsApiSlice = baseAPISlice.enhanceEndpoints({ addTagTypes: ['coins'] }).injectEndpoints({
  endpoints: (builder) => ({
    getAllCoins: builder.query({
      query: ({searchText, currentPage, currentSort}) => {
        const sort = currentSort.split('-')[0];
        const order = currentSort.split('-')[1];
        return `/coins?coin=${searchText}&page=${currentPage}&sort=${sort}&order=${order}`;
      },
      providesTags: ['coins'],
    }),
    createCoin: builder.mutation({
      query: (coin: string) => ({
        url: `/coins`,
        method: "POST",
        body: {
          coin
        },
      }),
      invalidatesTags: ['coins'],
    }),
    deleteCoin: builder.mutation({
      query: (coin: string) => ({
        url: `/coins/${coin}`,
        method: "DELETE",
      }),
      invalidatesTags: ['coins'],
    }),
    refreshCoin: builder.mutation({
      query: (id: string) => ({
        url: `/coins/${id}/refresh`,
        method: "PATCH",
      }),
      invalidatesTags: ['coins'],
    }),
    getCoinHistory: builder.query({
      query: (coin: string) => `/coins/${coin}/history`,
      providesTags: ['coins'],
    })
  }),
  overrideExisting: false,
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCoinsQuery, useCreateCoinMutation, useGetCoinHistoryQuery } = coinsApiSlice;
export default coinsApiSlice;