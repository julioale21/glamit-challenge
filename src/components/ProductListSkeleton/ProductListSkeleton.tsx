import React from "react";
import { Grid, Stack } from "@chakra-ui/react";
import { SkeletonElement } from "..";

const array = Array.from({ length: 9 }, (_, index) => index);

const ProductListSkeleton = () => {
  return (
    <Grid
      gap={3}
      paddingBottom={{ lg: "3em" }}
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
      w={{ base: "340px", md: "100%" }}
    >
      {array.map((item) => (
        <Stack key={item} marginBottom="4em">
          <Stack>
            <SkeletonElement type="image" />
          </Stack>
          <Stack>
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
          </Stack>
        </Stack>
      ))}
    </Grid>
  );
};

export default ProductListSkeleton;
