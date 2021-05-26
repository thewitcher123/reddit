import React from 'react';

import {Ship} from "../Ship/Ship";

import {randomSetup} from '../Board/methods/helper';

import './ShipList.css';


export const ShipList = () => {
    const {ships} = randomSetup();
    return (
        <div className="ship-list">
            {ships.map(item => <Ship key={item.name + item.size} {...item}/>)}
        </div>
    );
};
