import React from "react";
import { IconButton, Stack } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

interface Props {
  toggle: () => void;
  isOpen: boolean;
}

const MenuToggle: React.FC<Props> = ({ toggle, isOpen }) => {
  return (
    <Stack display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? (
        <IconButton
          aria-label=""
          backgroundColor="transparent"
          icon={<FaBars color="white" size="27px" />}
        />
      ) : (
        <IconButton
          aria-label=""
          backgroundColor="transparent"
          icon={<FaBars color="white" size="27px" />}
        />
      )}
    </Stack>
  );
};

export default MenuToggle;
