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

        singleUser: builder.query({
            query: (id) => ({
                url: `/single-user/${id}`,
                method: 'GET',
                invalidatesTags: ['User'], // Caches the data for invalidation
            })
        }),

        // Create a new user
        createUsers: builder.mutation({
            query: (payload) => ({
                url: '/create-user',
                method: 'POST',
                body: payload, // No need to stringify; RTK handles it,
                invalidatesTags: ['User'], // Invalidates the cache to refetch data
            }),
        }),
        userUpdateById: builder.mutation({
            query: ({ id, data }) => ({
                url: `/update-user/${id}`,
                method: 'PUT',
                body: data, // Use consistent naming
                invalidatesTags: ['User'],
            }),
        }),
    }),
});

export const { useAllUsersDataQuery, useCreateUsersMutation, useSingleUserQuery, useUserUpdateByIdMutation } = userApi;
export default userApi;
