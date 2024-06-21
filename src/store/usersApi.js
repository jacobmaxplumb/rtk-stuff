import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9000/'}),
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => 'users',
            providesTags: ['Users']
        }),
        addUser: builder.mutation({
            query: data => ({
                url: 'users',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Users']
        })
    })
})

export const {
    useGetUsersQuery,
    useAddUserMutation
  } = usersApi