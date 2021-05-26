import React from "react";

import './BoardCell.css';


export interface IBoardCell {
    value: string;
    row: number;
    column: number;
}
export const BoardCell: React.FC<IBoardCell> = ({value}) => {
    return (
        <div className="cell">
            {value}
        </div>
    )
};