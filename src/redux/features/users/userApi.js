import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/v1',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        // Fetch all users
        AllUsersData: builder.query({
            query: () => '/all-user',
            providesTags: ['User'], // Caches the data for invalidation
        }),

        // Create a new user
        createUsers: builder.mutation({
            query: (payload) => ({
                url: '/create-user',
                method: 'POST',
                body: payload, // No need to stringify; RTK handles it
            }),
            invalidatesTags: ['User'], // Invalidates the cache to refetch data
        }),
    }),
});

export const { useAllUsersDataQuery, useCreateUsersMutation  } = userApi;
export default userApi;
