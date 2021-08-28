import React from "react";
import { Text, Link } from "@chakra-ui/react";

interface Props {
  name: string;
  to?: string;
}
const LinkItem: React.FC<Props> = ({ name, to = "" }) => {
  return (
    <Link href={to}>
      <Text color="menuText" fontSize="16px" letterSpacing="0.32px">
        {name}
      </Text>
    </Link>
  );
};

export default LinkItem;
