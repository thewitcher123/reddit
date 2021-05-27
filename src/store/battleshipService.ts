import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IShip, randomSetup, registerTheHit} from "../components/Board/methods/helper";
import {IBoardCell} from '../components/BoardCell/BoardCell';
import { RootState } from './types';

interface IBattleshipSlice {
    board: string[][];
    ships: IShip[];
}

const initialState: IBattleshipSlice = {
    ...randomSetup()
};

const battleshipSlice = createSlice({
    name: "battleship",
    initialState,
    reducers: {
        shootTheShip: (state, action: PayloadAction<IBoardCell>) => {
            const {board, ships} = registerTheHit({...action.payload, ...state});
            state.board = board;
            state.ships = ships;
        },
        restartGame: () => {
            return randomSetup();
        },
    }
});

const {reducer, actions} = battleshipSlice;

export const {restartGame, shootTheShip} = actions;

export const scoreSelector = (state: RootState) => {
    const {ships} = state.battleship;
    const score = ships.filter(item => item.isDestroyed).length;
    return {score, showRestart: score === ships.length};
};

export const shipListSelector = (state: RootState) => {
    const {ships} = state.battleship;
    return {ships};
};

export const boardSelector = (state: RootState) => {
    const {board, ships} = state.battleship;
    const score = ships.filter(item => item.isDestroyed).length;
    return {board, score};
};


export default reducer;