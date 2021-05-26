import React from 'react';
import {compose} from 'redux';
import {connect, ConnectedProps, useDispatch} from "react-redux";

import BoardContainer from '../Board/Board';
import ShipListContainer from '../ShipList/ShipList';

import { Score } from '../Score/Score';

import {scoreSelector, restartGame} from '../../store/battleshipService';
import {RootState} from '../../store/types';

import './Game.css';


const Game: React.FC<GameReduxProps> = ({showRestart, score}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {showRestart && (
                <div className="restart">
                    <h1>Well done, Admiral!</h1>
                    <button onClick={() => dispatch(restartGame())}>Play again</button>
                </div>
            )}
            <div className="game">
                <div className="info">
                    <div className="statistics">
                        <Score score={score} position={1}/>
                        <Score score={0} position={2}/>
                    </div>
                    <ShipListContainer/>
                </div>
                <BoardContainer/>
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootState) => {
    return scoreSelector(state);
};

const connector = connect(mapStateToProps);
type GameReduxProps = ConnectedProps<typeof connector>;
export default compose(connector)(Game);
