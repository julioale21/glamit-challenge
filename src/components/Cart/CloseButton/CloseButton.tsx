import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  onClickButton: () => void;
}
const CloseButton: React.FC<Props> = ({ onClickButton }) => {
  return (
    <Button
      color="textColor"
      marginLeft="auto"
      paddingX={4}
      paddingY={2}
      variant="link"
      onClick={onClickButton}
    >
      X
    </Button>
  );
};

export default CloseButton;
