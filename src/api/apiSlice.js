import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com",
        prepareHeaders: (headers) => {
        headers.set("x-zocom", import.meta.env.REACT_APP_APPKEY); 
        return headers;
    },
  }),
    endpoints: (builder) => ({
        getMenu: builder.query({
        query: () => "/menu",
        }),
        getOrder: builder.query({
        query: (id) => "/" + import.meta.env.REACT_APP_TENANTID + "/orders/" + id,
        }),
        getReceipt: builder.query({
        query: (id) => "/receipts/" + id
        }),
        createOrder: builder.mutation({
            query: (itemsArray) => ({
                url: `/${import.meta.env.REACT_APP_TENANTID}/orders`,
                method: "POST",
                body: { items: itemsArray }, 
            }),
        }),
    }),  
});

export const { useGetMenuQuery, useGetOrderQuery, useGetReceiptQuery,useCreateOrderMutation } = apiSlice;