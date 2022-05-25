import React, { ReactNode, useState } from "react";
import {
  Direction,
  move,
  parseDirection,
  Position,
  rotate,
} from "../utils/Position";

type RoombaState = {
  position: Position;
  getEmoji: () => string;
  moveForward: () => void;
  rotateRight: () => void;
};

export const RoombaContext = React.createContext<RoombaState>({
  position: { row: 0, column: 0, size: 100, direction: Direction.Right },
  getEmoji: () => "",
  moveForward: () => {},
  rotateRight: () => {},
});

type RoombaContextProviderProps = {
  children?: ReactNode | undefined;
  size: number;
};

const RoombaContextProvider = ({
  children,
  size,
}: RoombaContextProviderProps) => {
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  const [direction, setDirection] = useState(Direction.Right);

  const state = {
    position: { row, column, size, direction },
    column,
    getEmoji: () => parseDirection(direction),
    moveForward: () => {
      const newPosition = move({ row, column, size, direction });
      setRow(newPosition.row);
      setColumn(newPosition.column);
      setDirection(newPosition.direction);
    },
    rotateRight: () => setDirection(rotate(direction)),
  };

  return (
    <RoombaContext.Provider value={state}>{children}</RoombaContext.Provider>
  );
};

export default RoombaContextProvider;
