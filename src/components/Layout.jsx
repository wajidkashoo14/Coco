import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}

export default Layout;