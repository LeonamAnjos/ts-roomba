import React from "react";
import Room from "./grid/Room";
import RoombaContextProvider from "./contexts/RoombaContext";
import MoveForwardControl from "./control/MoveForwardControl";
import RotateRightControl from "./control/RotateRightControl";

const size = 10;

function App() {
  return (
    <RoombaContextProvider size={size}>
      <MoveForwardControl></MoveForwardControl>
      <RotateRightControl></RotateRightControl>
      <Room size={size}></Room>
    </RoombaContextProvider>
  );
}

export default App;
