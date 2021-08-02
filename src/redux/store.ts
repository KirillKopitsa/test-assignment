import {configureStore} from '@reduxjs/toolkit'
import clients from "./sliceClients";

const store = configureStore({
    reducer: {
        clients:clients.reducer,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store