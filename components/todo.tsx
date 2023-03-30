import React from "react";
import { useDroppable } from "@dnd-kit/core";

export default function ToDoBoard(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: "to-do",
  });
  const style = {
    backgroundColor: isOver ? "lightblue" : "white",
    padding: "10px",
    border: "1px solid black",
    marginBottom: "10px",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <h2>To-Do</h2>
      {props.children}
    </div>
  );
}
