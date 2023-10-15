// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseAPISlice = createApi({
  // to replace with env variable
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost/api" }),
  endpoints: () => ({}),
});

export default baseAPISlice;