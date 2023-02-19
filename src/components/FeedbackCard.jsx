import { Box, Flex, Image, Text, } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'

function FeetbackCard() {
  return (
    <Box height={'25rem'} width={'20rem'} display={'flex'} boxShadow={'xl'}>
      <Box width={'12rem'} height={'100%'} background={'#004246'}></Box>
      <Flex flexDir={'column'} gap={'2'} p={'4'}>
        <Image src='./feedback.jpg' height={'80px'} width={'80px'} />
        <Text fontWeight={'600'} mt={'5'}>Wajid</Text>
        <Flex mb={'3'}>
          <AiOutlineStar color='#004246'/>
          <AiOutlineStar color='#004246'/>
          <AiOutlineStar color='#004246'/>
          <AiOutlineStar color='#004246'/>
          <AiOutlineStar color='#004246'/>
        </Flex>
        <Text fontSize={'.9rem'} textAlign={'left'} width={'100%'}>Product reviews are the opinions or feedbacks of customers for a particular product.
           Many online businesses put up a review section on their website to allow customers to rate 
           and review the product they purchased.
        </Text>
      </Flex>
    </Box>
  )
}

export default FeetbackCard