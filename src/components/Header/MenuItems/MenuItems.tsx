import React from "react";
import { Stack, Text } from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
}

const MenuItems: React.FC<Props> = ({ isOpen }) => {
  return (
    <Stack
      direction="row"
      display={{ base: `${isOpen ? "flex" : "none"}`, lg: "flex" }}
      justifyContent="center"
      w="100%"
    >
      <Stack
        alignItems={{ base: "center" }}
        direction={{ base: "column", lg: "row" }}
        justifyContent={{ lg: "space-between" }}
        marginBottom={{ base: "1em", lg: 0 }}
        marginTop={{ md: "-0.5rem" }}
        paddingBottom={{ md: 2 }}
        w={{ lg: "840px" }}
      >
        <Text color="menuText" fontSize="20px" textTransform="uppercase">
          Sale
        </Text>
        <Text color="menuText" fontSize="20px" textTransform="uppercase">
          E-shop
        </Text>
        <Text color="menuText" fontSize="20px" textTransform="uppercase">
          Lookbook
        </Text>
        <Text color="menuText" fontSize="20px" textTransform="uppercase">
          Campaña
        </Text>
        <Text color="menuText" fontSize="20px" textTransform="uppercase">
          Locales
        </Text>
      </Stack>
    </Stack>
  );
};

export default MenuItems;
