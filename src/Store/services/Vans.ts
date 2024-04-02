import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const VANS_API='/api'

export const vansApi=createApi({
    reducerPath:'vansApi',
    baseQuery:fetchBaseQuery({baseUrl:VANS_API}),//TODO: change to get the base form the .env file
    refetchOnFocus: true,
    tagTypes: ['Vans'],
    endpoints:(builder)=>({
        getVans:builder.query<any,any>(
            {
                query:()=>{ return {
                url:   '/vans',
                method:'GET'
                        }
                    },
                providesTags: ['Vans']
            }
        
        )
    })
})

export const {useGetVansQuery} = vansApi