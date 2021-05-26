import React from "react";

import {BoardRow} from '../BoardRow/BoardRow';

import './Board.css';

export const Board = () => {
    const board = new Array(10).fill("0");
    return (
        <div className="board">
            {board.map((item, index) => <BoardRow key={`row_${index}`} cells={item} row={index}/>)}
        </div>
    );
};