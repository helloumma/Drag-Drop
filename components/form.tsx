import {
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState<string>("");
  //const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [todoList, setTodoList] = useState<[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (input === "") return alert("please enter a value");

    const newList = todoList.slice();
    newList.splice(0, 0, { name: input });
    setTodoList(newList);
    setInput("");
  };
  console.log(todoList);
  return (
    <>
    <Flex>
      <Input value={input} placeholder="Add item" onChange={onChange} />
      <Button colorScheme="blue" onClick={onSubmit}>
        Add
      </Button>
     
    </Flex>
    {todoList.map((items: any, id: number) => (
        <p key={id}>{items.name}</p>
      ))}
    </>
  );
};

export default Form;
