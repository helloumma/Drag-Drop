import React from "react";
import { useDroppable } from "@dnd-kit/core";

export default function InProgressBoard(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: "in-progress",
  });
  const style = {
    backgroundColor: isOver ? "lightyellow" : "white",
    padding: "10px",
    border: "1px solid black",
    marginBottom: "10px",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <h2>In-Progress</h2>
      {props.children}
    </div>
  );
}
