import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const userApi = createApi({
    reducerPath : "usersApi",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:3000"
    }),
    endpoints : (builder)=>({
        getAllUsers : builder.query({
            query : ()=> `/users`
        })
    })
});

export const { useGetAllUsersQuery } = userApi;

export default userApi;