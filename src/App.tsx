import React from "react";
import AppLayout from "./layouts/AppLayout";
import Products from "./pages/Products";
import ProductContextProvider from "./context/ProductContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <AppLayout>
        <Products />
      </AppLayout>
    </ProductContextProvider>
  );
}

export default App;
