import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, Text } from "@chakra-ui/react";
import Filter from "../../components/Filter";
import { ProductCard, ProductList } from "../../components";
import Product from "../../models/Product";
import ApiService from "../../services/ApiService";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products: Product[] = await ApiService.fetchProducts();

      setProducts(products);
    };

    fetchProducts();
  }, []);

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
          <Stack alignItems="flex-start" display={{ base: "none", lg: "flex" }}>
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
        {products && <ProductList products={products} />}
      </Stack>
    </Stack>
  );
};

export default Products;
