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

const Form = () => (
  <Flex>
    <Input placeholder="Basic usage" />
    {/*<Menu>
      <MenuButton as={Button} rightIcon={"V"}>
        Select Board
      </MenuButton>
      <MenuList>
        <MenuItem>To do</MenuItem>
        <MenuItem>Currently</MenuItem>
        <MenuItem>Done</MenuItem>
      </MenuList>
</Menu>*/}
    <Button colorScheme="blue">Add</Button>
  </Flex>
);

export default Form;
