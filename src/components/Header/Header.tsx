import React from "react";
import { Stack } from "@chakra-ui/react";
import Logo from "../Logo";
import { Cart, MenuToggle } from "../../components";

const Header = () => {
  return (
    <Stack
      alignItems="center"
      bg="primary"
      boxShadow="0px 3px 6px #00000026"
      direction="row"
      h="69px"
      justifyContent="space-between"
      paddingX={4}
    >
      <MenuToggle isOpen={false} toggle={() => {}} />
      <Logo />
      <Cart />
    </Stack>
  );
};

export default Header;
