import { Box, Container, Flex, Heading,Text } from '@chakra-ui/react'
import React from 'react'


function WhyCoconut() {
  return (
    <Container minH={'70vh'} maxW={'100vw'} display={'flex'} justifyContent={'center'} flexDir={'column'} gap={'1rem'} py={'5rem'}>

        <Heading textAlign={'center'} my={'3rem'} className='heading-primary'>Why use Coconut!?</Heading>
        
        <Flex justifyContent="center" gap="3" width={'80vw'} mx="auto">
          <Box boxShadow="md" bg="green.100" maxH={'70vh'} p="5" borderRadius={14} width="21%" bgGradient='linear(to-r, #7270BA, #33B596)'>
            <Text width={'100%'}  fontSize={'17px'} textAlign={'center'} color={'#fff'} fontWeight={'400'}>
              {`We have grown up seeing this beautiful and Incredible fruit in our neighbourhood, credit that this fruit deserves is long overdue and appreciated only by few, it is the time we all come together and start inculcating this fruit as an integral part of our daily life!`}
            </Text>
          </Box>
          <Box boxShadow="md" bgGradient='linear(to-r, #7270BA, #33B596)' maxH={'70vh'} p="4" borderRadius={14} width="21%">
          <Text  textAlign={'center'} fontSize={'17px'} color={'#fff'}>{`When we observe closely, we realize it is one of its kind God sent wonder which has
            positivity written all over it! right from its blooming stage. This tree has given us benefits
            more than we could ever ask for!`}
            </Text></Box>
          <Box boxShadow="md" bgGradient='linear(to-r, #7270BA, #33B596)' maxH={'70vh'} p="4" borderRadius={14} width="21%">
            <Text  textAlign={'center'} fontSize={'17px'} color={'#fff'}>{`We believe it isn’t named God’s own Fruit or Kalpavruksha just like that!`}</Text></Box>
           <Box boxShadow="md" bgGradient='linear(to-r, #7270BA, #33B596)' maxH={'70vh'} p="4" borderRadius={14} width="21%"> 
           <Text color={'#fff'} textAlign={'center'} fontSize={'17px'} color={'#fff'}>{`Our Brand ‘Incredible CoCo’ is here to convert this fruit into More Valuable Product
              (MVP) by making numerous value addition around it and bring it to you in every possible
              form!`}
            </Text></Box>
        </Flex>
      </Container>
  )
}

export default WhyCoconut