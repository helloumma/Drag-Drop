import React from "react";
import { useDroppable } from "@dnd-kit/core";

export default function CompleteBoard(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: "done",
  });
  const style = {
    backgroundColor: isOver ? "lightgreen" : "white",
    padding: "10px",
    border: "1px solid black",
    marginBottom: "10px",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <h2>Done</h2>
      {props.children}
    </div>
  );
}
