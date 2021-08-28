import React from "react";
import { IconButton, Stack } from "@chakra-ui/react";
import { FaBars, FaAngleUp } from "react-icons/fa";

interface Props {
  toggle: () => void;
  isOpen: boolean;
}

const MenuToggle: React.FC<Props> = ({ toggle, isOpen }) => {
  return (
    <Stack display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? (
        <IconButton
          _hover={{ bg: "transparent", ring: "none" }}
          aria-label=""
          backgroundColor="transparent"
          icon={<FaAngleUp color="white" size="27px" />}
        />
      ) : (
        <IconButton
          _hover={{ bg: "transparent", ring: "none" }}
          aria-label=""
          backgroundColor="transparent"
          icon={<FaBars color="white" size="27px" />}
        />
      )}
    </Stack>
  );
};

export default MenuToggle;
