import React from "react";
import { IconButton, Stack } from "@chakra-ui/react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

const MenuIcons: React.FC = () => {
  return (
    <Stack direction="row" spacing={0}>
      <IconButton
        _focus={{ border: "none" }}
        _hover={{ background: "transparent", ring: "none" }}
        aria-label=""
        backgroundColor="transparent"
        display={{ base: "none", lg: "inline-flex" }}
        icon={<FaSearch color="white" size="27px" />}
      />
      <IconButton
        _focus={{ border: "none" }}
        _hover={{ background: "transparent", ring: "none" }}
        aria-label=""
        backgroundColor="transparent"
        display={{ base: "none", lg: "inline-flex" }}
        icon={<FaUser color="white" size="27px" />}
      />
      <IconButton
        _focus={{ border: "none" }}
        _hover={{ background: "transparent", ring: "none" }}
        aria-label=""
        backgroundColor="transparent"
        icon={<FaShoppingCart color="white" size="27px" />}
      />
    </Stack>
  );
};

export default MenuIcons;
