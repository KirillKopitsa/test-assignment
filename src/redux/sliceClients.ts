import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {ICard, Istate} from "../types/type";
import {asyncThunkGetClients} from "./thunk/getClients";
import {sortByDate} from "./helpers";

const initialState: Istate = {
    data: [],
}

const clients = createSlice({
    name: 'clients',
    initialState: initialState,
    reducers: {
        deleteCard: (state: Draft<Istate>, action: PayloadAction<string>) => {
            state.data = state.data.filter(card => card.id !== action.payload);
        },
        handleAddCard: (state, action: PayloadAction<ICard>) => {
            state.data.push(action.payload)
        },
        sortByName: (state: Draft<Istate>, action: PayloadAction<boolean>) => {
            if (action.payload) {
                state.data = sortByDate(state.data, 'name');
                return
            }
            state.data = sortByDate(state.data, 'date');
        }
    },
    extraReducers: (builder) => {
        builder.addCase(asyncThunkGetClients.fulfilled, (state, action: PayloadAction<ICard[]>) => {
            state.data = sortByDate(action.payload, 'date');
        })
    },
})

export const {deleteCard, handleAddCard, sortByName} = clients.actions;

export default clients;