import React from "react";
import { Stack, Image } from "@chakra-ui/react";
import LogoImg from "../../assets/logo.svg";

const Logo: React.FC = (props) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      paddingLeft={{ lg: "90px" }}
      width="100%"
      {...props}
    >
      <Image src={LogoImg} width={{ base: "140px", lg: "206px" }} />
    </Stack>
  );
};

export default Logo;
