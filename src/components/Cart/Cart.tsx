import React, { useContext } from "react";
import { Box, Button, Image, Modal, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { ProductContext } from "../../context/ProductContext";
import CartContainer from "./CartContainer";
import CloseButton from "./CloseButton";
import CartTitle from "./CartTitle";

const Cart = () => {
  const { cart, addToCart, removeFromCart, isCartOpen, closeCart } = useContext(ProductContext);
  const totalItems = React.useMemo(
    () => cart.reduce((total, product) => total + product.price * product.quantity, 0),
    [cart],
  );

  return (
    <Modal isOpen={isCartOpen} onClose={closeCart}>
      <ModalOverlay onClose={closeCart} />
      <CartContainer>
        <CloseButton onClickButton={closeCart} />
        <CartTitle text="Mis Productos" />

        {totalItems > 0 ? (
          <>
            <Box paddingY={2}>
              {cart.map((product) => (
                <Stack
                  key={product.id}
                  alignItems="center"
                  direction="row"
                  fontSize="xl"
                  justifyContent="space-between"
                  padding={{ base: 2, md: 4 }}
                >
                  <Stack width={{ base: "40%", md: "20%" }}>
                    <Image src={product.image} />
                  </Stack>
                  <Stack flex={1} justifyContent="space-between" paddingLeft={4}>
                    <Text color="textColor" fontSize={{ base: "sm", md: "lg" }}>
                      {product.name}
                    </Text>
                    <Stack alignItems="center" direction="row" justifyContent="space-between">
                      <Stack alignItems="center" color="textColor" direction="row">
                        <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="bold">
                          Cantidad:
                        </Text>
                        <Stack alignItems="center" direction="row">
                          <Button size="sm" onClick={() => removeFromCart(product)}>
                            -
                          </Button>
                          <Stack width={{ base: "15px", md: "40px" }}>
                            <Text fontSize={{ base: "xs", md: "lg" }} textAlign="center">
                              {product.quantity}
                            </Text>
                          </Stack>
                          <Button size="sm" onClick={() => addToCart(product)}>
                            +
                          </Button>
                        </Stack>
                      </Stack>
                      <Text fontSize={{ base: "md", md: "xl" }}>
                        ${product.price * product.quantity}
                      </Text>
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
              fontSize={{ base: "sm", md: "xl" }}
              fontWeight="bold"
              justifyContent="space-between"
              padding={4}
            >
              <Text color="textColor">Total: ${totalItems}</Text>
              <Button color="primary" fontSize={{ base: "sm", md: "xl" }} variant="link">
                Comprar
              </Button>
            </Stack>
          </>
        ) : (
          <Text color="textColor" paddingY={5}>
            No hay productos seleccionados
          </Text>
        )}
      </CartContainer>
    </Modal>
  );
};

export default Cart;
