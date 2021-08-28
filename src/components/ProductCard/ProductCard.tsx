import React from "react";
import { Image, Stack, Text } from "@chakra-ui/react";

interface Product {
  name: string;
  price: number;
  image: string;
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Stack className="product-card" marginBottom="4em">
      <Stack borderBottom="1.3px solid" borderColor="primary">
        <Image src={product.image} />
      </Stack>
      <Stack>
        <Text fontSize="20px">{product.name}</Text>
        <Text fontSize="20px" fontWeight="bold">
          ${product.price}
        </Text>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
