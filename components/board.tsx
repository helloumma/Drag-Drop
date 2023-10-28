import React, { LegacyRef, ReactNode } from "react";
import { props as boardProps } from "../lib/board";

const Board = (props: boardProps) => {
  return (
    <div ref={props.setNodeRef} style={props.style}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default Board;
