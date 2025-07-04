import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-key': '8fd4cc5935msh55369f10316779ap1845e9jsneaa2d2f9d6f8',
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins'),
    }),
    getCryptoDetails: builder.query({
      query: (uuid) => createRequest(`/coin/${uuid}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ uuid, timeperiod }) =>
        createRequest(`/coin/${uuid}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timeperiod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
