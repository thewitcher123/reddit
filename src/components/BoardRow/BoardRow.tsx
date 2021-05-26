import React from "react";

import {BoardCell} from "../BoardCell/BoardCell";

import './BoardRow.css';

interface IBoardRow {
    cells: string[];
    row: number;
}
export const BoardRow: React.FC<IBoardRow> = ({cells, row}) => {
    return (
        <div className="row">
            {cells.map((item, index) => <BoardCell key={`cell_${row}_${index}_${item}`} value={item} row={row} column={index}/>)}
        </div>
    )
};