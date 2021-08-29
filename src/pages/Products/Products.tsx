import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Image, Modal, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import Filter from "../../components/Filter";
import { ProductList } from "../../components";
import Product from "../../models/Product";
import ApiService from "../../services/ApiService";
import ProductListSkeleton from "../../components/ProductListSkeleton/ProductListSkeleton";
import { ProductContext } from "../../context/ProductContext";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { cart, addToCart, isCartOpen, closeCart } = useContext(ProductContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const products: Product[] = await ApiService.fetchProducts();

      setProducts(products);
    };

    fetchProducts();
  }, []);

  const total = React.useMemo(
    () => cart.reduce((total, product) => total + product.price, 0),
    [cart],
  );

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
      <Modal isOpen={isCartOpen} onClose={closeCart}>
        <ModalOverlay onClose={closeCart} />
        <Stack
          backgroundColor="#FAFAFA"
          border="5px solid"
          borderColor="textColor"
          maxH="100vh"
          maxW={480}
          overflowY="auto"
          padding={4}
          position="fixed"
          right={0}
          top={0}
          width="100%"
          zIndex={9999}
        >
          <Button
            color="textColor"
            marginLeft="auto"
            paddingX={4}
            paddingY={2}
            variant="link"
            onClick={closeCart}
          >
            Cerrar
          </Button>
          <Text color="textColor" fontSize="xl" fontWeight="bold" paddingX={4}>
            Mis Productos
          </Text>
          <Box paddingY={2}>
            {cart.map((product) => (
              <Stack
                key={product.id}
                alignItems="center"
                direction="row"
                fontSize="xl"
                justifyContent="space-between"
                padding={4}
              >
                <Stack width="20%">
                  <Image src={product.image} />
                </Stack>
                <Stack flex={1} justifyContent="space-between" paddingLeft={4}>
                  <Text>{product.name}</Text>
                  <Stack direction="row" justifyContent="space-between">
                    <Stack alignItems="center" direction="row">
                      <Text color="textColor" fontSize="sm" fontWeight="bold">
                        Cantidad:
                      </Text>
                      <Stack alignItems="center" direction="row">
                        <Button></Button>
                        <Stack width="40px">
                          <Text textAlign="center">10</Text>
                        </Stack>
                        <Button></Button>
                      </Stack>
                    </Stack>
                    <Text>${product.price}</Text>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Box>
          <Stack
            alignItems="center"
            borderTopColor="primary"
            borderTopWidth={2}
            direction="row"
            justifyContent="space-between"
            padding={4}
          >
            <Text color="textColor" flex={1} fontSize="3xl">
              Total: ${total}
            </Text>
            <Button color="primary" fontSize="2xl" variant="link">
              Comprar
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
};

export default Products;
