import React, { useState } from "react";
import { Stack } from "@chakra-ui/react";
import Logo from "../Logo";
import { MenuIcons, MenuToggle } from "../../components";
import MenuItems from "./MenuItems/MenuItems";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Stack as="header" bg="primary" boxShadow="0px 3px 6px #00000026">
      <Stack alignItems="center" direction="row" h="69px" paddingX={4}>
        <MenuToggle isOpen={isOpen} toggle={toggle} />
        <Logo />
        <MenuIcons />
      </Stack>
      <MenuItems isOpen={isOpen} />
    </Stack>
  );
};

export default Header;
