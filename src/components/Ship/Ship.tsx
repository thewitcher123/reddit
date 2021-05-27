import React from 'react';

import {IShip} from '../Board/methods/helper';

import Carrier from '../../assets/Carrier Shape.png';
import Cruiser from '../../assets/Cruiser Shape.png';
import Submarine from '../../assets/Submarine Shape.png';
import Battleship from '../../assets/Battleship Shape.png';
import Aircraft from '../../assets/Aircraft Shape.png';
import HitSmall from '../../assets/Hit small.png';
import MissSmall from '../../assets/Miss small.png';

import './Ship.css';


export const Ship: React.FC<IShip> = ({size, hits, isDestroyed, name}) => {
    const getShipImg = () => {
        switch (name) {
            case "aircraft":
                return <img className="ship-img-file" src={Aircraft} alt="Aircraft" />;
            case "battleship":
                return <img className="ship-img-file" src={Battleship} alt="Battleship" />;
            case "cruiser":
                return <img className="ship-img-file" src={Cruiser} alt="Cruiser" />;
            case "submarine":
                return <img className="ship-img-file" src={Submarine} alt="Submarine" />;
            default:
                return <img className="ship-img-file" src={Carrier} alt="Carrier" />;
        }
    };
    const getShipHealth = () => {
        const arr = new Array(size).fill(1);
        return arr.map((item, index) => (
            <img
                key={index + 'shipHealth'}
                className="ship-health-point"
                //src={isDestroyed || hits > index ? HitSmall : MissSmall}
                src={isDestroyed ? HitSmall : MissSmall}
                alt={index + 'shipHealth'}
            />
        ))
    };
    return (
        <div className="ship">
            <div className="ship-img">{getShipImg()}</div>
            <div className="ship-health">{getShipHealth()}</div>
        </div>
    )
};