import React from "react";
import { Grid } from "@chakra-ui/react";
import Product from "../../models/Product";
import { ProductCard } from "../../components";

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <Grid
      gap={3}
      paddingBottom={{ lg: "3em" }}
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
      width="100%"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ProductList;
