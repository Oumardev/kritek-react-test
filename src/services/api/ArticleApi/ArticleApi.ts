import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ARTICLE_URL } from '../../url/API_URL'
import { ArticleModel } from '@/models'


export const ArticleApi = createApi({
    reducerPath: 'ArticleApi',
    baseQuery: fetchBaseQuery({ baseUrl: ARTICLE_URL, credentials: "same-origin" }),
    endpoints: (builder) => ({

        getArticleById: builder.query<ArticleModel, { id: string }>({
            query: (arg) => ({
                method: 'GET',
                url: `/${arg.id}`
            })
        }),

        getArticle: builder.query<ArticleModel[], void>({
            query: () => ({
                method: 'GET',
                url: '/'
            })
        }),

        addArticle: builder.mutation<void, ArticleModel>({
            query: (data: ArticleModel) => ({
                method: 'POST',
                url: '/',
                body: data
            })
        }),

        deleteArticle: builder.mutation<void, { id: string }>({
            query: (arg) => ({
                method: 'DELETE',
                url: `/${arg.id}`
            })
        }),

        patchArticle: builder.mutation<void, { data: ArticleModel, id: string }>({
            query: (data: { data: ArticleModel, id: string }) => ({
                method: 'PATCH',
                url: `/${data.id}`,
                body: data.data
            })
        }),

    })
})

export const { useAddArticleMutation, useGetArticleQuery, useDeleteArticleMutation, usePatchArticleMutation, useGetArticleByIdQuery } = ArticleApi;