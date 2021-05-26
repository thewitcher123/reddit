import React from 'react';

import { Board } from '../Board/Board';
import { Score } from '../Score/Score';
import { ShipList } from '../ShipList/ShipList';

import './Game.css';


export const Game = () => {
    return (
        <div>
            <div className="restart">
                <button>Restart game</button>
            </div>
            <div className="game">
                <div className="info">
                    <div className="statistics">
                        <Score score={5} position={1}/>
                        <Score score={0} position={2}/>
                    </div>
                    <ShipList/>
                </div>
                <Board/>
            </div>
        </div>
    );
};
