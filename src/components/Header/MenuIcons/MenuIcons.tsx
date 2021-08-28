import React from "react";
import { IconButton, Stack } from "@chakra-ui/react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

const MenuIcons: React.FC = () => {
  return (
    <Stack direction="row" spacing={0}>
      <IconButton
        aria-label=""
        backgroundColor="transparent"
        display={{ base: "none", lg: "inline-flex" }}
        icon={<FaSearch color="white" size="27px" />}
      />
      <IconButton
        aria-label=""
        backgroundColor="transparent"
        display={{ base: "none", lg: "inline-flex" }}
        icon={<FaUser color="white" size="27px" />}
      />
      <IconButton
        aria-label=""
        backgroundColor="transparent"
        icon={<FaShoppingCart color="white" size="27px" />}
      />
    </Stack>
  );
};

export default MenuIcons;
