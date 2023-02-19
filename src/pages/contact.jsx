import { Container,Box, Image, Flex, Text, FormControl, FormLabel, Input, Textarea, Heading, Button} from '@chakra-ui/react'
import {GoLocation} from 'react-icons/go'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'

import React from 'react'

function contact() {
  return (
    <Container maxW={'100%'} minH={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} py={'8rem'} backgroundImage={'./contact.jpg'} objectFit={'contain'}>
        {/* <Box width={'100%'} height={'100vh'}zIndex={'-1'}>
            <Image src='./contact.jpg' height={'40rem'} width={'40rem'} position={'absolute'} top={'0'} left={'0'} />
        </Box> */}
        <Box width={'75%'} maxH={'80vh'} display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'} zIndex={'1000'} boxShadow={'dark-lg'}>
          <Box width={'50%'} height={"100%"} p={'5'}>
            <Flex flexDir={'column'} gap={'1.5rem'}>
            <Heading textTransform={'capitalize'} my={'3'} color={'#004246'}>Get in touch</Heading> 
            <Text width={'80%'} fontSize={'.9rem'}>Incredible CoCo – A social startup aiming to provide sustainable income for Farmer collectives
               and women SHGs by creating more value to their CoCo plantations at various stages of its life, 
               At the same time provide a pure, genuine and healthy products to our neighbourhood, it is a 
               conscious choice we have made to promote awareness, 
              sustainability and health! Come join us in our mission towards promoting Agronomy the right way!</Text>
            <Flex alignItems={'center'} gap={'3'}> 
              <GoLocation />
              <Text>Karnataka, India</Text>
             </Flex>
            <Flex alignItems={'center'} gap={'3'}> 
              <BsFillTelephoneFill />
              <Text>+91 9596103894</Text>
             </Flex>
            <Flex alignItems={'center'} gap={'3'}> 
              <MdEmail />
              <Text>Wajidkashoo@gmail.com</Text>
             </Flex>
             <Heading fontSize={'lg'}>Connect with us:</Heading>
             <Flex gap={'3'} alignItems={'center'} fontSize={'1.5rem'} >
              <FaFacebookF cursor={'pointer'}/>
              <AiFillInstagram cursor={'pointer'} />
              <AiOutlineTwitter cursor={'pointer'} />
             </Flex>


            </Flex>
          </Box>
            
            <FormControl width={'50%'} background={'#004246'} p={'5'}  spacing={4}>
            <Heading textTransform={'capitalize'} my={'3'} color={'#e5f0f0'}>Contact us</Heading>
                    <FormLabel my={'3'} color={'#fff'}>Email address</FormLabel>
                    <Input type='email' backgroundColor={'#e5f0f0'} py={'2'} size={'lg'}/>
                    <FormLabel my={'3'} color={'#fff'}>Mobile Number</FormLabel>
                    <Input type='mobile' backgroundColor={'#e5f0f0'} size={'lg'}/>
                    <FormLabel my={'3'} color={'#fff'}>Message</FormLabel>
                    <Textarea placeholder='Message' backgroundColor={'#e5f0f0'}  height={'20vh'}/>
                    <Button size={'lg'} my={'5'} background={'#B0D9E7'} color={'#1D570B'}>Send</Button>
            </FormControl>
        </Box>


    </Container>
  )
}

export default contact