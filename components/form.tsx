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
} from "@chakra-ui/react";

const Form = () => (
  <div>
    <Input placeholder="Basic usage" />
    <Menu>
      <MenuButton as={Button} rightIcon={"V"}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>To do</MenuItem>
        <MenuItem>Current</MenuItem>
        <MenuItem>Done</MenuItem>
      </MenuList>
    </Menu>
    <Button colorScheme="blue">Add</Button>
  </div>
);

export default Form;
