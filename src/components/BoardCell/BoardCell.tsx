import React from "react";
import {useDispatch} from "react-redux";

import { getCellComponent } from './methods/componentHelper';
import {shootTheShip} from '../../store/battleshipService';

import { MISS_CHAR, EMPTY_CHAR } from '../../const/const';

import './BoardCell.css';



export interface IBoardCell {
    value: string;
    row: number;
    column: number;
}
export const BoardCell: React.FC<IBoardCell> = ({value, row, column}) => {
    const dispatch = useDispatch();
    const onCellClick = () => {
        dispatch(shootTheShip({
            row,
            column,
            value: value !== EMPTY_CHAR && value !== MISS_CHAR ? value : MISS_CHAR
        }));
    };
    return (
        <div className="cell" onClick={onCellClick}>
            {getCellComponent(value)}
        </div>
    )
};