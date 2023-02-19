import { Box, Image, Text, Heading, Link, Button } from "@chakra-ui/react";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import styles from "../styles/swipper.module.css";
import data from "../data/utility";

function UtilityProducts({}) {
  const router = useRouter();
  return (
    <>  
    <Heading textAlign={'center'} className="heading-primary" mt={'3rem'}>our best selling products</Heading>
    <Box p={{ base: "0", md: "4", lg: "10" }} width={'90vw'} mx={'auto'}>
      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={4}
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 640px
          320: {
            width: 320,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Box
                display={"flex"}
                onClick={() => router.push(`./tourdetails/${item.id}`)}
                py={{ base: "3rem", md: "2rem", lg: "5rem" }}
                mx={{ base: "0", md: "1rem", lg: "0" }}
              >
                <Box
                  w={"300px"}
                  h={"450px"}
                  boxShadow={"md"}
                  display={"flex"}
                  flexDir={"column"}
                  position={"relative"}
                  cursor={"pointer"}
                >
                  <Box zIndex={"10"}>
                    <Image
                      src={item.img}
                      objectFit={"cover"}
                      h={"220px"}
                      w={"100%"}
                      loading={"lazy"}
                    />
                  </Box>
                  <Box px={"3"} zIndex={"1000"} py={"5"} width={"400px"}>
                    <Heading
                      zIndex={"10000"}
                      fontSize={"xl"}
                      fontWeight={"600"}
                      color={'#135054'}
                    >
                      {item.title}
                    </Heading>
                    <Text width={'250px'} fontSize={'.9rem'} my={'5'}>
                      I like coconut water and i have that daily in the morning. It keeps my stomach healthy 
                      </Text>
                      <Box display={'flex'} justifyContent={'space-between'} width={'270px'}>
                    <Button size={'md'}   backgroundColor={'#008D62'} color={'#fff'
                    } _hover={{ backgroundColor: "#5eb762" }} padding={'1.2rem 1rem'}>Know More</Button>
                     <Text fontWeight={'500'} ><span>&#8377;</span>499.99</Text>
                    </Box>
                  </Box>

                  {/* <Box px={"3"}>
                    <Box display={"flex"} alignItems={"center"} gap={"3"}>
                      <AiOutlineClockCircle />
                      <Link> {item.headingsecondary}</Link>
                    </Box>
                    <Box
                      display={"flex"}
                      gap={"2"}
                      alignItems={"center"}
                      mt={"3"}
                    >
                      <AiTwotoneStar color={"#FFDC00"} />
                      <AiTwotoneStar color={"#FFDC00"} />
                      <AiTwotoneStar color={"#FFDC00"} />
                      <AiTwotoneStar color={"#FFDC00"} />
                      <AiTwotoneStar color={"#FFDC00"} />
                      <Text>5 reviews</Text>
                    </Box>
                    <Box
                      display={"flex"}
                      gap={"1"}
                      alignItems={"center"}
                      mt={"3"}
                    ></Box>
                  </Box> */}

                  
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
    </>
  );
}

export default UtilityProducts;
