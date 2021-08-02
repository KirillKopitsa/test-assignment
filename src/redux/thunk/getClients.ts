import {createAsyncThunk} from "@reduxjs/toolkit";
import ApiService, {ApiData} from "../../Api";
import {ICard} from "../../types/type";


export const asyncThunkGetClients = createAsyncThunk<ICard[]>(
    'clients/putDataToStore',
    async () => {
        return await ApiData.getClientsSchedule();
    }
);