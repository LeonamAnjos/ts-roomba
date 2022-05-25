import React, { useContext } from "react";
import { RoombaContext } from "../contexts/RoombaContext";
import "../styles/Grid.css";

type RowProps = {
  column: number;
  row: number;
};

const Row = ({ column, row }: RowProps) => {
  const { position, getEmoji } = useContext(RoombaContext);

  const isRoombaPresent = position.column === column && position.row === row;

  return <div className="Cell">{isRoombaPresent && getEmoji()}</div>;
};

export default Row;
