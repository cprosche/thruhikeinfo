// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewSignupApi = createApi({
  reducerPath: "reviewSignupApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://thruhikeinfo-signup.up.railway.app/v1/",
    headers: { "X-Api-Key": process.env.NEXT_PUBLIC_SIGNUP_API_KEY },
  }),
  endpoints: (builder) => ({
    isSignupAvailable: builder.query({ query: () => "ping" }),
    sendEmail: builder.mutation({
      query: (email) => ({ url: `signup?email=${email}`, method: "POST" }),
    }),
  }),
});

export const { useIsSignupAvailableQuery, useSendEmailMutation } = reviewSignupApi;
