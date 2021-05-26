import {combineReducers} from 'redux';
import {configureStore} from "@reduxjs/toolkit";

import battleship from './battleshipService';


export const rootReducer = combineReducers({
    battleship,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});