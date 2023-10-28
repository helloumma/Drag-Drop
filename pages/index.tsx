import Head from "next/head";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./Draggable";
import { Form, ToDoBoard, InProgressBoard, CompleteBoard } from "../components";
import { Center, Wrap, WrapItem } from "@chakra-ui/react";

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [todoList, setTodoList] = useState<{ name: string; status: string }[]>(
    []
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (input === "") return alert("please enter a value");

    const newList = todoList.slice();
    newList.splice(0, 0, { name: input, status: "to-do" });
    setTodoList(newList);
    setInput("");
  };

  const handleDragEnd = (e: any) => {
    const { over } = e;
    if (!over) return;

    const { id: parentId } = over;
    const itemId = e.active.id;

    const newList = todoList.map((item, id) => {
      id = id + 1;
      if (id === itemId) {
        return {
          ...item,
          status: parentId,
        };
      } else {
        return item;
      }
    });
    setTodoList(newList);
  };

  return (
    <>
      <Head>
        <title>Drag + Drop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Form input={input} onChange={onChange} onSubmit={onSubmit} />

        <DndContext onDragEnd={handleDragEnd}>
          <Wrap>
            <WrapItem>
              <Center w="33vw" bg="red.200">
                <ToDoBoard>
                  {todoList.map((item, id: number) => {
                    if (item.status === "to-do") {
                      return (
                        <ul key={id}>
                          <Draggable key={id} id={id + 1}>
                            <li>{item.name}</li>
                          </Draggable>
                        </ul>
                      );
                    }
                  })}
                </ToDoBoard>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="33vw" bg="blue.200">
                <InProgressBoard>
                  {todoList.map((item, id: number) => {
                    if (item.status === "in-progress") {
                      return (
                        <ul key={id}>
                          <Draggable key={id} id={id + 1}>
                            <li>{item.name}</li>
                          </Draggable>
                        </ul>
                      );
                    }
                  })}
                </InProgressBoard>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="32.8vw" bg="green.200">
                <CompleteBoard>
                  {todoList.map((item, id: number) => {
                    if (item.status === "done") {
                      return (
                        <ul key={id}>
                          <Draggable key={id} id={id + 1}>
                            <li>
                              <s>{item.name}</s>
                            </li>
                          </Draggable>
                        </ul>
                      );
                    }
                  })}
                </CompleteBoard>
              </Center>
            </WrapItem>
          </Wrap>
        </DndContext>
      </main>
    </>
  );
}
