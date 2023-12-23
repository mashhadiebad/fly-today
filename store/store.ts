import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

interface filter{
    flightsKind:string;
    airline:string;
    listLength:number;
}

const initialFilterState:filter = {
    flightsKind:'',
    airline:'',
    listLength:0
}

const filterSlice  = createSlice({
    name:'filter',
    initialState:initialFilterState,
    reducers:{
        setFlightsKindFilter(state, action: PayloadAction<string>){
            state.flightsKind = action.payload
        },
        setAirlineFilter(state, action: PayloadAction<string>){
            state.airline = action.payload
        },
        setListLength(state, action: PayloadAction<number>){
            state.listLength = action.payload
        }
    }

})

export const filterActions = filterSlice.actions;

interface sort{
    sortType:string;
}

const initialSortState:sort = {
    sortType:'totalFare'
}

const sortSlice = createSlice({
    name:'sort',
    initialState:initialSortState,
    reducers:{
        setSortType(state, action: PayloadAction<string>){
            state.sortType = action.payload
        }
    }
})

export const sortActions = sortSlice.actions;

const store = configureStore({
    reducer:{filter:filterSlice.reducer, sort:sortSlice.reducer},
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store;