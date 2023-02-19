import { Container, Heading, Text, Flex, Box } from '@chakra-ui/react'
import React from 'react'
import FeedbackCard from './FeedbackCard'


function Feedback() {
  return (
    <Container height={'100vh'} maxWidth={'80vw'} background={'#FAFBFB'} >
        <Heading className='heading-primary' py={'10'} textAlign={'center'}>What People say about us</Heading>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} py={'6rem'}>

        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />

        </Box>
    </Container>
  )
}

export default Feedback