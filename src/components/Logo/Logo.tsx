import React from "react";
import { Box, Image } from "@chakra-ui/react";
import LogoImg from "../../assets/logo.svg";

const Logo: React.FC = (props) => {
  return (
    <Box {...props}>
      <Image src={LogoImg} width="140px" />
    </Box>
  );
};

export default Logo;
