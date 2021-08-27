import React from "react";
import { Stack, Text } from "@chakra-ui/layout";

const Footer: React.FC = () => {
  return (
    <Stack
      alignItems="center"
      bg="primary"
      boxShadow="0px -3px 6px #00000026"
      direction={{ base: "column" }}
      h="161px"
      justifyContent="center"
    >
      <Text color="menuText" fontSize="16px" letterSpacing="0.32px">
        Ayuda
      </Text>
      <Text color="menuText" fontSize="16px" letterSpacing="0.32px">
        Contacto
      </Text>
      <Text color="menuText" fontSize="16px" letterSpacing="0.32px">
        Términos y condiciones
      </Text>
      <Text color="menuText" fontSize="16px" letterSpacing="0.32px">
        Políticas de privacidad
      </Text>
    </Stack>
  );
};

export default Footer;
