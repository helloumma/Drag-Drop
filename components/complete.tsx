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
    color: isOver ? "white" : "green",
    padding: "10px",
    marginBottom: "10px",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <h2>Done</h2>
      {props.children}
    </div>
  );
};

export default CompleteBoard;
