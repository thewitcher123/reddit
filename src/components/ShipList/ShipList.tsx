import React from 'react';
import {compose} from 'redux';
import {connect, ConnectedProps} from "react-redux";

import {Ship} from "../Ship/Ship";
import {RootState} from "../../store/types";
import {shipListSelector} from "../../store/battleshipService";

const ShipList: React.FC<ShipListReduxProps> = ({ships}) => {
    return (
        <div className="ship-list">
            {ships.map(item => <Ship key={item.name + item.size} {...item}/>)}
        </div>
    );
};

const mapStateToProps = (state: RootState) => {
    return shipListSelector(state);
};

const connector = connect(mapStateToProps);
type ShipListReduxProps = ConnectedProps<typeof connector>;
export default compose(connector)(ShipList);
