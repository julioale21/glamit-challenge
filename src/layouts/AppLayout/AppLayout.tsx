import React from "react";
import { Stack } from "@chakra-ui/react";
import { Header } from "../../components";
import Footer from "../../components/Footer/Footer";

const AppLayout: React.FC = ({ children }) => (
  <Stack h="100%" minH="100vh">
    <Header />
    <Stack h="100%" minH="100vh">
      {children}
    </Stack>
    <Footer />
  </Stack>
);

export default AppLayout;
