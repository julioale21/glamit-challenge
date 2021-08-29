import React from "react";
import { Stack, Text } from "@chakra-ui/react";

interface Props {
  currentFilter: string;
  isOpen?: boolean;
  name: string;
  onFilterSelected: (filter: string) => void;
  toggle?: () => void;
  values: string[];
}
const Filter: React.FC<Props> = ({
  currentFilter,
  isOpen = false,
  name,
  onFilterSelected,
  toggle,
  values,
}) => {
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
          <Text
            key={index}
            color="textColor"
            cursor="pointer"
            fontSize="16px"
            fontWeight={currentFilter === value ? "bold" : "normal"}
            paddingX="1em"
            onClick={() => onFilterSelected(value)}
          >
            {value}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
};

export default Filter;
