import React from "react";
import { Image, IconButton, Stack, Text } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import "./styles.css";

interface Product {
  name: string;
  price: number;
  image: string;
}

interface Props {
  onProductSelected: () => void;
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product, onProductSelected }) => {
  return (
    <Stack className="product-card" marginBottom="4em" position="relative">
      <Stack borderBottom="1.3px solid" borderColor="primary">
        <Image src={product.image} />
      </Stack>
      <Stack>
        <Text fontSize="20px">{product.name}</Text>
        <Text fontSize="20px" fontWeight="bold">
          ${product.price}
        </Text>
      </Stack>

      <Stack
        background="rgba(0,0,0,0.3)"
        className="add-cart"
        direction="row"
        height="100%"
        justifyContent="flex-end"
        left={0}
        position="absolute"
        top={0}
        width="100%"
      >
        <IconButton
          _active={{ bg: "transparent ", ring: "none" }}
          _hover={{ bg: "transparent ", ring: "none" }}
          aria-label=""
          backgroundColor="transparent"
          icon={<FaCartPlus color="white" size={30} />}
          onClick={onProductSelected}
        />
      </Stack>
    </Stack>
  );
};

export default ProductCard;
