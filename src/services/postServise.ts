import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Users } from "../interfaces";
export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<Users, void>({
      query: () => ({
        url:'/users',
      }),
    }),
  }),
});

export const { useGetUsersQuery } = postAPI;
