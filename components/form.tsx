import { Input, Button, Flex } from "@chakra-ui/react";
import { form as formProps } from "../lib/form";

const Form = ({ input, onChange, onSubmit }: formProps) => {
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
