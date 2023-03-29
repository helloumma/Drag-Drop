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
import { ChangeEventHandler, MouseEventHandler } from "react";

interface form {
  input: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Form = ({ input, onChange, onSubmit }: form) => {
  return (
    <>
      <Flex>
        <Input value={input} placeholder="Add item" onChange={onChange} />
        <Button colorScheme="blue" onClick={onSubmit}>
          Add
        </Button>
      </Flex>
    </>
  );
};

export default Form;
