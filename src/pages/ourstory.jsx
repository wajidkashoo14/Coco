import { Container, Flex, Heading, Text, Box, Image, Button } from '@chakra-ui/react'
import React from 'react'

function aboutus() {
  return (
    <Container maxW={'100vw'} minH={'100vh'} py={'10rem'} background={'#F6F8FC'}>
      <Flex maxWidth={'90%'} height={'60vh'} justifyContent={'center'} alignItems={'flex-start'} mx={'10'} mt={'10'}>
        <Heading width={'50%'} fontSize={'4rem'}>Our Story</Heading>
        <Text width={'40%'}>{`Incredible CoCo – A social startup aiming to provide sustainable income for Farmer 
              collectives and women SHGs by creating more value to their CoCo plantations at various 
              stages of its life, At the same time provide a pure, genuine and healthy products to our
               neighbourhood, it is a conscious choice we have made to promote awareness, sustainability 
               and health!
               Come join us in our mission towards promoting Agronomy the right way!`}</Text>
      </Flex>

      <Flex width={'90%'} height={'100vh'} mx={'10'} position={'relative'} >
        <Box background={'#004246'} width={'50%'} p={'10'}>
        <Heading color={'#fff'} fontSize={'2xl'} fontWeight={'600'} textAlign={'center'} mx={'auto'} width={'50%'}>
          Coconut improves the insulin secretion and utilization of blood glucose.
               </Heading>
        </Box>
        <Box width={'50%'}>
        <Heading fontSize={'3xl'} mb={'10'} ml={'10'}>Incredible Coco</Heading> 
          <Text width={'80%'} fontSize={'.9rem'} ml={'10'}>
            
            {`Incredible CoCo – A social startup aiming to provide sustainable income for Farmer 
              collectives and women SHGs by creating more value to their CoCo plantations at various 
              stages of its life, At the same time provide a pure, genuine and healthy products to our
               neighbourhood`}
           </Text>
           <Box width={'100%'} height={'80%'} background={'#EDEFF1'} mt={'40%'} display={'flex'} 
           flexDir={'column'} alignItems={'flex-start'} p={'10'} justifyContent={'flex-end'} gap={'10'} mb={'5rem'}>
            <Heading fontSize={'2xl'}>Incredible Coco</Heading>
            <Text>{`Incredible CoCo – A social startup aiming to provide sustainable income for Farmer 
              collectives and women SHGs by creating more value to their CoCo plantations at various 
              stages of its life, At the same time provide a pure, genuine and healthy products to our
               neighbourhood`}</Text>
           </Box>
            </Box>
            <Box position={'absolute'} width={'60%'} height={'55vh'} background={'#004246'}
             boxShadow={'xl'} top={'35%'} left={'20%'}> 
            <Flex maxWidth={'100%'} height={'100%'}>
              <Box width={'5rem'} height={'100%'} background={'#008D62'}></Box>
              <Box width={'100%'} position={'relative'}  opacity={'7'}>
                  <Image src='./beach.jpg' height={'100%'} width={'100%'} zIndex={'-1'} opacity={'7'}/>
                  <Box position={'absolute'} top={'0'} left={'0'} color='rgba(0,0,0,0.4)' zIndex={'1000'} width={'100%'} height={"100%"}></Box>
              </Box>
            </Flex>
            </Box>
      </Flex>
      <Box width={'25%'} minH={'50vh'} ml={'15%'} my={'5rem'}>
        <Text fontSize={'.8rem'} mb={'10'}>{`Incredible CoCo – A social startup aiming to provide sustainable income for Farmer 
              collectives and women SHGs by creating more value to their CoCo plantations at various 
              stages of its life, At the same time provide a pure, genuine and healthy products to our
               neighbourhood`}
               {`Incredible CoCo – A social startup aiming to provide sustainable income for Farmer 
              collectives and women SHGs by creating more value to their CoCo plantations at various 
              stages of its life, At the same time provide a pure, genuine and healthy products to our
               neighbourhood`}
               
               
               </Text>
               <Button size={'md'}   backgroundColor={'#008D62'} color={'#fff'
                    } _hover={{ backgroundColor: "#5eb762" }} padding={'1.2rem 1rem'}>Contact us</Button>
      </Box>

    </Container>
  )
}

export default aboutus