import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "./index";
const Layout = ({ children }) => {
  return (
    <>
      <Box position="fixed" top="0" left="0" width="100%" zIndex="999">
        <Navbar />
      </Box>
      <Container maxW="var(--widthContainer)">{children}</Container>
    </>
  );
};
export default Layout;
