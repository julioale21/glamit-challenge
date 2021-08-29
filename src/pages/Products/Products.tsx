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
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { addToCart } = useContext(ProductContext);
  const [isCategoriesOpen, setCategoriesOpen] = useState<boolean>(true);
  const [isSizesOpen, setSizesOpen] = useState<boolean>(true);
  const [isColorsOpen, setColorsOpen] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const products: Product[] = await ApiService.fetchProducts();

      setProducts(products);
      setFilteredProducts(products);
    };

    fetchProducts();
  }, []);

  const handleSelectedProduct = (product: Product) => {
    addToCart(product);
  };

  const filterBySize = (size: string) => {
    setFilteredProducts(products.filter((product) => product.sizes.includes(size)));
  };

  const filterByColor = (color: string) => {
    setFilteredProducts(
      products.filter((product) => product.color.toLowerCase() === color.toLowerCase()),
    );
  };

  const toggleCategories = () => setCategoriesOpen(!isCategoriesOpen);
  const toggleSizes = () => setSizesOpen(!isSizesOpen);
  const toggleColors = () => setColorsOpen(!isColorsOpen);

  return (
    <Stack bg={{ md: "#FAFAFA" }} minH="100vh" paddingX={{ base: "1.2rem", lg: 0 }}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        marginTop={{ lg: "2em" }}
        marginX="auto"
        minW="70%"
        spacing={8}
        w={{ md: "760px", xl: "1086px" }}
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
              isOpen={isCategoriesOpen}
              name="Categorias"
              toggle={toggleCategories}
              values={["Zapatillas", "Zapatos", "Botas", "Sandalias", "Pantuflas"]}
              onFilterSelected={() => {}}
            />
            <Filter
              isOpen={isSizesOpen}
              name="Talle"
              toggle={toggleSizes}
              values={["36", "38", "40", "42", "44"]}
              onFilterSelected={filterBySize}
            />
            <Filter
              isOpen={isColorsOpen}
              name="Color"
              toggle={toggleColors}
              values={["Amarillo", "Negro", "Verde", "Azul", "Blanco"]}
              onFilterSelected={(value) => filterByColor(value)}
            />
          </Stack>
        </Box>
        {products.length ? (
          <ProductList handleSelectedProduct={handleSelectedProduct} products={filteredProducts} />
        ) : (
          <ProductListSkeleton />
        )}
      </Stack>
      <Cart />
    </Stack>
  );
};

export default Products;
