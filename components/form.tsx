import { Input, Button, Flex } from "@chakra-ui/react";
import { ChangeEventHandler, MouseEventHandler } from "react";

interface form {
  input: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: MouseEventHandler<HTMLButtonElement> | undefined | any;
}

const Form = ({ input, onChange, onSubmit }: form) => {
  return (
    <Flex>
      <Input value={input} placeholder="Add item" onChange={onChange} />
      <Button colorScheme="blue" type="submit" onClick={onSubmit}>
        Add
      </Button>
    </Flex>
  );
};

export default Form;
