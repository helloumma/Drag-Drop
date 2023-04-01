import React, { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

interface props {
  children: ReactNode;
}

const InProgressBoard = (props: props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "in-progress",
  });
  const style = {
    color: isOver ? "white" : "blue",
    padding: "10px",
    marginBottom: "10px",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <h2>In-Progress</h2>
      {props.children}
    </div>
  );
};

export default InProgressBoard;
