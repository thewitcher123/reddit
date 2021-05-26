import React from "react";
import {compose} from "redux";
import {connect, ConnectedProps} from "react-redux";

import {BoardRow} from "../BoardRow/BoardRow";

import {RootState} from "../../store/types";

import {boardSelector} from "../../store/battleshipService";

import './Board.css';

export const Board: React.FC<BoardReduxProps> = ({board}) => {
    return (
        <div className="board">
            {board.map((item, index) => <BoardRow key={`row_${index}`} cells={item} row={index}/>)}
        </div>
    );
};


const mapStateToProps = (state: RootState) => {
    return boardSelector(state);
};

const connector = connect(mapStateToProps);
type BoardReduxProps = ConnectedProps<typeof connector>;
export default compose(connector)(Board);