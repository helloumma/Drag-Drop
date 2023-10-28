import React, { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";
import { Text } from "@chakra-ui/react";
import { props as toDoProps } from "../lib/inProgress";

const ToDoBoard = (props: toDoProps) => {
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
      <Text fontSize="4xl" as="b">
        To Do
      </Text>
      {props.children}
    </div>
  );
};

export default ToDoBoard;
