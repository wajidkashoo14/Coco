import { Container, Flex, Text, Box, Heading } from '@chakra-ui/react'
import  data  from '../data/food'
import Image from 'next/image';


function BestSellingProducts() {

  return (
   <Container minH={'100vh'} maxW={'90vw'} bg={'#FAFBFB'}>
    <Heading className='heading-primary' textAlign={'center'} my={'3rem'}>best selling food</Heading>

    {data.map((item, index) =>{
      return(
        <Flex justifyContent={'space-around'} alignItems={'center'} p={'10'} width={'100%'} gap={'5rem'}>
          {index % 2 === 0 ? (
            <>
            <Box width={'50vw'} boxShadow={'lg'}>
            <Image src={item.img} boxSize='600px'
              alt="Picture of the food"
              width={600}
              height={600}
              />
              </Box>
              <Box width={'50vw'}>
            <Heading fontSize={'2xl'} mb={'5'} className= 'secondary-heading'>{item.heading}</Heading>
            <Text width={'35vw'} textAlign={'justify'} fontSize={'1.1rem'} className='text'>{item.description}</Text>
            </Box>
            </>
          ) :
          <>
          <Box width={'50vw'}>
            <Heading fontSize={'2xl'} mb={'5'} className= 'secondary-heading'>{item.heading}</Heading>
            <Text width={'35vw'} textAlign={'justify'} fontSize={'1.1rem'} className='text'lineHeight={'1.rem'}>{item.description}</Text>
            </Box>
            <Box width={'50vw'} boxShadow={'lg'}>
            <Image src={item.img} 
              alt="Picture of the food"
              width={600}
              height={600}
            
              />
              </Box>
          </>
          }
      </Flex>
      )
    })}
  </Container>
  );
}

export default BestSellingProducts