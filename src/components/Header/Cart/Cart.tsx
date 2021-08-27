import React from "react";
import { Box, Image } from "@chakra-ui/react";
import CartImg from "../../../assets/carrito.svg";

const Cart: React.FC = () => {
  return (
    <Box>
      <Image src={CartImg} width="27px" />
    </Box>
  );
};

export default Cart;
