import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { vansApi } from './services/Vans'


const persistConfig = {
    key: 'root',
    storage ,
    whitelist: ['']
}

const rootReducer = combineReducers({
[vansApi.reducerPath]: vansApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer) 

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(
        vansApi.middleware
    )
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export const persistor = persistStore(store)
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = (state: RootState) => state