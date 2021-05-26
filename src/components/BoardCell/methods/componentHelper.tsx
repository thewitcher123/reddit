import React from 'react';
import Miss from '../../../assets/Miss.png';
import Hit from '../../../assets/Hit.png';

import {MISS_CHAR, HIT_CHAR} from '../../../const/const';

export const getCellComponent = (value: string) => {
    switch (value) {
        case MISS_CHAR:
            return <img className="cell-img" src={Miss} alt="Miss" />;
        case HIT_CHAR:
            return <img className="cell-img" src={Hit} alt="Hit" />;
        default:
            return "";
    }
};