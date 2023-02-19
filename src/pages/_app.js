import { ChakraProvider } from "@chakra-ui/react";
import theme from '../theme/index'
import React from "react";
import '../theme/style.css'
import Layout from '../components/Layout.jsx'





function MyApp({
  Component,
  pageProps
}) {
  return ( 
  <ChakraProvider theme={theme}>
   <Layout>
     <Component {...pageProps}/>  
    </Layout>
    </ChakraProvider >
  );
}

export default MyApp;