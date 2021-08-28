import React from "react";
import { Stack, Text } from "@chakra-ui/react";

interface Props {
  name: string;
  values: string[];
}
const Filter: React.FC<Props> = ({ name, values }) => {
  return (
    <Stack as="section" w="100%">
      <Stack backgroundColor="#E4E8EE" paddingX="1em" paddingY="5px" w="100%">
        <Text color="textColor" fontSize="16px" fontWeight="bold">
          {name}
        </Text>
      </Stack>
      {values.map((value, index) => (
        <Text key={index} color="textColor" fontSize="16px" paddingX="1em">
          {value}
        </Text>
      ))}
    </Stack>
  );
};

export default Filter;
