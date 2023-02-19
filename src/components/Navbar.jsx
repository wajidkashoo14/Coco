import React, { useEffect, useState } from "react";
import { Container, Flex, Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
// import styles from '../styles/Home.module.css'
import Router, { useRouter } from "next/router";
import logo from '../assets/logo.png'
import Image from "next/image";

function Navbar() {
  const [color, setColor] = useState('transparent')
  const [shadow, setShadow] = useState('')

  const router = useRouter()

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroud);
  }, []);
  const changeBackgroud = () => {
    if (window.scrollY > 50) {
      setColor("#004246");
      setShadow('rgba(0, 0, 0, 0.35) 0px 5px 15px')
    } else {
      setColor("transparent");
      setShadow('')
    }
  };

  return (
    <Box
      w={"100vw"}
      h={"6rem"}
      px={"5rem"}
      position={'fixed'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      style={{ background: `${color}`, transition: "all 0.5s" , boxShadow: `${shadow}`}}
      zIndex={'100000'}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        height={"100%"}
        width={"100%"}
        fontWeight={'600'}
      >
        <Flex>
       
          <Link href="/"  style={{
              textDecoration: 'none',
             fontWeight:"600",
              fontSize: "30px",
              
            }}>
            <Image src={logo}  width={80}
                height={80} alt='logo' />
          </Link>
   
         
        </Flex>
        <Flex gap={"10"} color={color === '#004246' ? '#fff' : '#314755'} fontSize={"1.2rem"} fontWeight={'500'}>
          <Link href="/">Home</Link>
          <Link href="/">Products</Link>
          <Link href="/"  onClick={() =>{router.push('/ourstory')}} >Our Story</Link>
          <Link href="/" onClick={() =>{router.push('/contact')}}  >Contact</Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
