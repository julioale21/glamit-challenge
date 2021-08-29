import React, { useContext } from "react";
import { IconButton, Stack, Text } from "@chakra-ui/react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { ProductContext } from "../../../context/ProductContext";

const MenuIcons: React.FC = () => {
  const { cart, openCart } = useContext(ProductContext);

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
      <Stack position="relative">
        <IconButton
          _focus={{ border: "none" }}
          _hover={{ background: "transparent", ring: "none" }}
          aria-label=""
          backgroundColor="transparent"
          icon={<FaShoppingCart color="white" size="27px" />}
          onClick={openCart}
        />
        <Stack position="absolute" right="25%" top="-20px">
          {cart.length > 0 ? (
            <Text color="white" fontWeight="bold">
              {cart.length}
            </Text>
          ) : null}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MenuIcons;
