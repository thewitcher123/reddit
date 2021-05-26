import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IShip, randomSetup} from "../components/Board/methods/helper";
import {IBoardCell} from '../components/BoardCell/BoardCell';
import {HIT_CHAR, MISS_CHAR} from '../const/const';
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
            const {row, column, value} = action.payload;
            if (value === MISS_CHAR) {
                state.board[row][column] = value;
            } else {
                const updatedShips = state.ships.map(item => {
                    if (item.size === parseFloat(value[0]) && item.name[0] === value[1]) {
                        return {...item, hits: item.hits + 1, isDestroyed: item.hits + 1 === item.size};
                    }
                    return item;
                });
                state.board[row][column] = HIT_CHAR;
                state.ships = updatedShips;
            }
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