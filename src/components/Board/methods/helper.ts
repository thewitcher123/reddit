import {EMPTY_CHAR} from '../../../const/const';


export interface IShip {
    name: string;
    size: number;
    hits: number;
    isDestroyed: boolean;
}

export const startShips: IShip[] = [
    {name: "aircraft", size: 5, hits: 0, isDestroyed: false},
    {name: "battleship", size: 4, hits: 0, isDestroyed: false},
    {name: "cruiser", size: 3, hits: 0, isDestroyed: false},
    {name: "submarine", size: 3, hits: 0, isDestroyed: false},
    {name: "carrier", size: 2, hits: 0, isDestroyed: false}
];

export const prepareBoard = (size = 10) => {
    let result = [];
    for (let i = 0; i < size; i++) {
        result.push(prepareBoardRow(size));
    }
    return result;
};


const prepareBoardRow = (size = 10) => {
    return new Array(size).fill(EMPTY_CHAR);
};

interface IShipPositionProps {
    shipSize: number;
    isHorizontal: boolean;
}
const getShipRandomPosition = ({shipSize, isHorizontal}: IShipPositionProps) => {
    const randomRow = isHorizontal ? Math.floor(Math.random() * 10) : Math.floor(Math.random() * (10 - shipSize - 1));
    const randomColumn = isHorizontal ? Math.floor(Math.random() * (10 - shipSize - 1)) : Math.floor(Math.random() * 10);
    return {
        randomRow, randomColumn
    }
};

interface IShipDirectionProps {
    board: string[][];
    row: number;
    ship: IShip;
    column: number;
}
const trySetShipHorizontally = ({board, ship, row, column}: IShipDirectionProps) => {
    const currentRow = board[row];
    const boardPart = currentRow.slice(column, column + ship.size).filter(item => item === EMPTY_CHAR);
    if (boardPart.length === ship.size) {
        for (let i = column; i < column + ship.size; i++) {
            currentRow[i] = createShipTag(ship);
        }
        return;
    }
    else {
        const {randomRow, randomColumn} = getShipRandomPosition({shipSize: ship.size, isHorizontal: true});
        trySetShipHorizontally({board, ship, row: randomRow, column: randomColumn});
    }
};

const trySetShipVertically = ({board, ship, row, column}: IShipDirectionProps) => {
    const boardVerticalPart = [];
    for (let i = row; i < row + ship.size; i++) {
        boardVerticalPart.push(board[i][column]);
    }
    if (boardVerticalPart.filter(item => item === EMPTY_CHAR).length === ship.size) {
        for (let i = row; i < row + ship.size; i++) {
            board[i][column] = createShipTag(ship);
        }
        return;
    }
    else {
        const {randomRow, randomColumn} = getShipRandomPosition({shipSize: ship.size, isHorizontal: false});
        trySetShipVertically({board, ship, row: randomRow, column: randomColumn});
    }
};

const createShipTag = ({name, size}: IShip) => size + name[0]; // to differ between similar sizes

export const randomSetup = () => {
    const board = prepareBoard(10);
    startShips.forEach((ship) => {
        const direction = Math.floor(Math.random() * 10);
        const shipSize = ship.size;
        if (direction < 5) {
            const {randomRow, randomColumn} = getShipRandomPosition({shipSize, isHorizontal: true});
            trySetShipHorizontally({board, ship, row: randomRow, column: randomColumn});
        } else {
            const {randomRow, randomColumn} = getShipRandomPosition({shipSize, isHorizontal: false});
            trySetShipVertically({board, ship, row: randomRow, column: randomColumn});
        }
    });

    return {board, ships: startShips};
};