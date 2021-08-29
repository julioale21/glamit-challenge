import React from "react";
import { Stack, Text } from "@chakra-ui/react";

interface Props {
  name: string;
  values: string[];
  isOpen?: boolean;
  toggle?: () => void;
}
const Filter: React.FC<Props> = ({ name, values, isOpen = false, toggle }) => {
  return (
    <Stack as="section" w="100%">
      <Stack
        backgroundColor="#E4E8EE"
        cursor="pointer"
        paddingX="1em"
        paddingY="5px"
        w="100%"
        onClick={toggle}
      >
        <Text color="textColor" fontSize="16px" fontWeight="bold">
          {name}
        </Text>
      </Stack>
      <Stack display={isOpen ? "flex" : "none"}>
        {values.map((value, index) => (
          <Text key={index} color="textColor" fontSize="16px" paddingX="1em">
            {value}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
};

export default Filter;
