import React, { LegacyRef, ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

interface props {
  setNodeRef: LegacyRef<HTMLDivElement> | undefined;
  children: ReactNode;
  style: object;
  title: string;
}

const Board = (props: props) => {
  return (
    <div ref={props.setNodeRef} style={props.style}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default Board;
