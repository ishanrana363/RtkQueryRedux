import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    endpoints: (builder) => ({
        AllUsersData: builder.query({
            query: () => `/users`,
        }),


    }),
});

export const { useAllUsersDataQuery } = userApi;
export default userApi;
