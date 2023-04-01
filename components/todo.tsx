import React, { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

interface props {
  children: ReactNode;
}

const ToDoBoard = (props: props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "to-do",
  });
  const style = {
    color: isOver ? "white" : "red",
    padding: "10px",
    marginBottom: "10px",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <h2>To-Do</h2>
      {props.children}
    </div>
  );
};

export default ToDoBoard;
