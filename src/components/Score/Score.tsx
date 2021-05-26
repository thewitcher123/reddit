import React from "react";

import './Score.css';

interface IScoreStats {
    score: number;
    position: number;
}
export const Score: React.FC<IScoreStats> = ({score, position}) => {
    return (
        <div className={`score score-${position}`}>
            <div className="score-counter">{score}</div>
            <div className="score-player">{`Player ${position}`}</div>
        </div>
    );
};
