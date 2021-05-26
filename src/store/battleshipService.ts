import {createSlice} from '@reduxjs/toolkit';

const initialState = {

};

const battleshipSlice = createSlice({
    name: 'battleship',
    initialState,
    reducers: {
        restartGame: () => {
            return initialState;
        },
    }
});

const {reducer} = battleshipSlice;


export default reducer;