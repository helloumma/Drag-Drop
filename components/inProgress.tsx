import React, { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";
import { Text } from "@chakra-ui/react";

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
      <Text fontSize="4xl" as="b">
        In Progress
      </Text>
      {props.children}
    </div>
  );
};

export default InProgressBoard;
