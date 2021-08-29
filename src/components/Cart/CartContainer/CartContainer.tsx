import React from "react";
import { Stack } from "@chakra-ui/layout";

const CartContainer: React.FC = ({ children }) => {
  return (
    <Stack
      backgroundColor="#FAFAFA"
      boxShadow="5px 5px 5px #100217E6"
      maxH="100vh"
      maxW={480}
      overflowY="auto"
      padding={4}
      position="fixed"
      right={0}
      top={0}
      width="100%"
      zIndex={9999}
    >
      {children}
    </Stack>
  );
};

export default CartContainer;
