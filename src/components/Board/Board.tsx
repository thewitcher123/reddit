import React from "react";

import {BoardRow} from '../BoardRow/BoardRow';

import {randomSetup} from './methods/helper';

import './Board.css';

export const Board = () => {
    const {board} = randomSetup();
    return (
        <div className="board">
            {board.map((item, index) => <BoardRow key={`row_${index}`} cells={item} row={index}/>)}
        </div>
    );
};