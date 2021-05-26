import {createSlice} from '@reduxjs/toolkit';
import {IShip, randomSetup} from "../components/Board/methods/helper";

interface IBattleshipSlice {
    board: string[][];
    ships: IShip[];
}

const initialState: IBattleshipSlice = {
    ...randomSetup()
};

const battleshipSlice = createSlice({
    name: 'battleship',
    initialState,
    reducers: {
        restartGame: () => {
            return randomSetup();
        },
    }
});

const {reducer, actions} = battleshipSlice;

export const {restartGame} = actions;


export default reducer;