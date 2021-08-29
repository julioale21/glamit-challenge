import React, { useContext, useEffect, useState } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import Filter from "../../components/Filter";
import { Cart, ProductList } from "../../components";
import Product from "../../models/Product";
import ApiService from "../../services/ApiService";
import ProductListSkeleton from "../../components/ProductListSkeleton/ProductListSkeleton";
import { ProductContext } from "../../context/ProductContext";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useContext(ProductContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const products: Product[] = await ApiService.fetchProducts();

      setProducts(products);
    };

    fetchProducts();
  }, []);

  const handleSelectedProduct = (product: Product) => {
    addToCart(product);
  };

  return (
    <Stack bg={{ md: "#FAFAFA" }} minH="100vh" paddingX={{ base: "1.2rem", lg: 0 }}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        marginTop={{ lg: "2em" }}
        marginX="auto"
        spacing={8}
        w={{ md: "960px", xl: "1086px" }}
      >
        <Box marginBottom="22px" minWidth={{ lg: "260px" }}>
          <Text
            borderBottom="1px solid"
            borderColor="primary"
            color="textColor"
            fontSize="24px"
            fontWeight="bold"
            width="100%"
          >
            Zapatillas
          </Text>
          <Stack alignItems="flex-start" display={{ base: "none", lg: "flex" }} marginTop={2}>
            <Text color="textColor" fontSize="20px" fontWeight="bold">
              Filtrar
            </Text>
            <Filter
              name="Categorias"
              values={["Zapatillas", "Zapatos", "Botas", "Sandalias", "Pantuflas"]}
            />
            <Filter name="Talle" values={["36", "38", "40", "42", "44"]} />
            <Filter name="Color" values={["Amarillo", "Negro", "Verde", "Azul", "Blanco"]} />
          </Stack>
        </Box>
        {products.length ? (
          <ProductList handleSelectedProduct={handleSelectedProduct} products={products} />
        ) : (
          <ProductListSkeleton />
        )}
      </Stack>
      <Cart />
    </Stack>
  );
};

export default Products;
