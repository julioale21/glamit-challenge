import React from "react";
import { Stack } from "@chakra-ui/react";
import "./styles.css";

interface Props {
  type: string;
}

const SkeletonElement: React.FC<Props> = ({ type }) => {
  const classes: string = `skeleton ${type}`;

  return <Stack className={classes}></Stack>;
};

export default SkeletonElement;
