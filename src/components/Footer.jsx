import { Container, Flex, Heading, Text, Box, color } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/Footer.module.css";
import { GrFacebook } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";

function Footer() {
  return (
    <Container
      minH={"50vh"}
      maxW={"100%"}
      bg={"#004246"}
      display={{ base: "block", md: "block", lg: "flex" }}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      color={"#fff"}
      py={"6"}
      fontFamily={"Montserrat"}
    >
      <Box
        width={{ base: "100%", md: "100%", lg: "80%" }}
        display={{ base: "block", md: "block", lg: "flex" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10rem"}
        py={"2rem"}
        borderBottom={"1px solid #986D7B"}
        minHeight={"60vh"}
      >
        <Flex
          flexDir={"column"}
          maxW={{ base: "100%", md: "100%", lg: "350px" }}
          alignItems={{ base: "flex-start", md: "center" }}
        >
          <Heading
            textTransform={"uppercase"}
            fontSize={"1.2rem"}
            py={"1.5rem"}
            borderBottom={"2px solid #80A1AE"}
            width={{ base: "100%", md: "100%", lg: "100%" }}
            mb={"1.5rem"}
            textAlign={{ base: "left", md: "left", lg: "center" }}
            mx={{ base: "2", md: "3", lg: "0" }}
          >
            About us
          </Heading>
          <Box>
            <Text
              fontSize={".9rem"}
              fontWeight={"300"}
              textAlign={"justify"}
              color={"#BECFD6"}
              p={{ base: "3", md: "3", lg: "0" }}
            >
              {`Incredible CoCo – A social startup aiming to provide sustainable income for Farmer 
              collectives and women SHGs by creating more value to their CoCo plantations at various 
              stages of its life, At the same time provide a pure, genuine and healthy products to our
               neighbourhood, it is a conscious choice we have made to promote awareness, sustainability 
               and health!
               Come join us in our mission towards promoting Agronomy the right way!`}
            </Text>
          </Box>
        </Flex>

        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={{ base: "flex-start", md: "center" }}
          mt={{ base: "1rem", md: "3rem", lg: "0" }}
          ml={"3"}
        >
          <Heading
            textTransform={"uppercase"}
            fontSize={"1.2rem"}
            py={"1.5rem"}
            borderBottom={"2px solid #80A1AE"}
            width={{ base: "100%", md: "100%", lg: "150px" }}
            mb={"1.5rem"}
          >
            quick links
          </Heading>
          <Flex gap={"4"} flexDir={"column"}>
            <Link className={styles.link} href="/">
            Home
            </Link>
            <Link className={styles.link} href="/">
              Products
            </Link>
            <Link className={styles.link} href="/transport">
              Our Story
            </Link>
              
            <Link className={styles.link} href="/contact">
            Contact
            </Link>

            <Link className={styles.link} href="/blogs">
             f
            </Link> 
          </Flex>
        </Flex>
        <Flex flexDir={"column"}>
          <Heading
            textTransform={"uppercase"}
            fontSize={"1.2rem"}
            py={"1rem"}
            borderBottom={"2px solid #80A1AE"}
            width={{ base: "100%", md: "100%", lg: "100%" }}
            mb={".8rem"}
            textAlign={{ base: "left", md: "left", lg: "center" }}
            mt={"10"}
            mx={{ base: "2", md: "3", lg: "0" }}
          >
            Contact
          </Heading>
          <Flex flexDir={"column"} gap={"4"}>
            <Box
              px={{ base: "2", md: "2", lg: "4" }}
              color={"#BECFD6"}
              mt={"3"}
            >
              <Text>call us</Text>
              <Text color={"#5191FA"}>+91-9596103894</Text>
              <Text color={"#5191FA"}>+91-9596103894</Text>
            </Box>
            <Box px={{ base: "2", md: "2", lg: "5" }} color={"#BECFD6"}>
              <Text>Email us</Text>
              <Text color={"#5191FA"}>Wkashoo@gmail.com</Text>
            </Box>
            <Box
              gap={"6"}
              px={{ base: "2", md: "2", lg: "5" }}
              color={"#BECFD6"}
            >
              <Text py={"2"}>Follow us</Text>
              <Box display={"flex"} gap={"6"} fontSize={"1.2rem"}>
                <Link
                  className={styles.link}
                  href="https://wajidtravelapp.netlify.app/"
                >
                  <GrFacebook />
                </Link>
                <Link
                  className={styles.link}
                  href="https://wajidtravelapp.netlify.app/"
                >
                  <SiInstagram />
                </Link>
                <Link
                  className={styles.link}
                  href="https://wajidtravelapp.netlify.app/"
                >
                  <BsYoutube />
                </Link>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Text mt={"5"} color={"#80A1AE"}>
        Designed and developed by <Link href="#">Wajid Kashoo</Link>
      </Text>
    </Container>
  );
}

export default Footer;
