import React from "react";
import { Stack } from "@chakra-ui/layout";
import MenuLinks from "./MenuLinks";

const Footer: React.FC = () => {
  return (
    <Stack
      alignItems="center"
      as="footer"
      bg="primary"
      boxShadow="0px -3px 6px #00000026"
      direction={{ base: "column", lg: "row" }}
      h={{ base: "161px", lg: "58px" }}
      justifyContent={{ base: "center", lg: "space-between" }}
      paddingX={{ lg: "calc((100vw - 665px) / 2)" }}
    >
      <MenuLinks />
    </Stack>
  );
};

export default Footer;
