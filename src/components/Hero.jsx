import { Container, Heading, Text, Box, Button, Image } from "@chakra-ui/react";
import React from "react";



function Hero() {
  return (
    <Box
      h={"100vh"}
      maxW={"100vw"}
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      pt={'5rem'}
      // className="hero-container"
      backgroundImage={"url('./hero.png')"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      px={'4rem'}
      overflowX={'hidden'}
    >
      <Box>
        <Heading width={"22rem"} fontSize={"6rem"} 
         fontWeight={'extrabold'} textTransform={'uppercase'} letterSpacing={'5px'}
          className='heading-primary' >
          {`God's own fruit`}
        </Heading>
        <Button
          textTransform={"uppercase"}
          backgroundColor={"#74C447"}
          color={'#fff'}
          padding={'1.8rem 1.5rem'}
          size={"lg"}
          _hover={{ backgroundColor: "#5eb762" }}
          mt={"8"}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;
