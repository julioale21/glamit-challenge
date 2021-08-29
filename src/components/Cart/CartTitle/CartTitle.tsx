import React from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  text: string;
}
const CartTitle: React.FC<Props> = ({ text }) => {
  return (
    <Text
      borderBottomColor="primary"
      borderBottomWidth={2}
      color="textColor"
      fontSize="xl"
      fontWeight="bold"
      paddingBottom={3}
      paddingX={4}
    >
      {text}
    </Text>
  );
};

export default CartTitle;
