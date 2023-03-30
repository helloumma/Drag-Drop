import React, { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

interface props {
  children: ReactNode;
}

const CompleteBoard = (props: props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "done",
  });
  const style = {
    backgroundColor: isOver ? "lightgreen" : "white",
    padding: "10px",
    border: "1px solid black",
    marginBottom: "10px",
    textDecoration: "line-through",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <h2>Done</h2>
      {props.children}
    </div>
  );
};

export default CompleteBoard;
