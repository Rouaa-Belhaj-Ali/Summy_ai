import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidapiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    //which API we wanna call
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
    prepareHeaders: (headers) => {
      headers.set("content-type", "application/json");
      headers.set("X-RapidAPI-Key", rapidapiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;