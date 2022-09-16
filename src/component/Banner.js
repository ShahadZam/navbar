import React from 'react'
import {
    Box,
    Image,
    Button,
    Container,
    Heading,
    Grid,
    Badge,
    FormControl,
    Input,
    Stack,
    Text,
    Flex,
    useBreakpointValue,
    HStack,
    VStack
  } from '@chakra-ui/react';
  import illustration from '../images/illustration.svg';
  import Navbar from './Navbar'
import Footer from './Footer';
import HowItWorks from './HowItWorks';
import bannerimage from '../images/bann6.jpg'
import tutor from '../images/tutor.jpg'
import art from '../images/art.jpg'
import gaming from '../images/gaming.jpg'
import hosting from '../images/hostingg.jpg'
import cooking from '../images/cooking.jpg'
import travlling from '../images/travelling.jpg'
import babysitting from '../images/babystting.jpg'
import shopping from '../images/shopping.jpg'
import { HashLink } from 'react-router-hash-link';




function Banner() {
    return (
        <>
         <Heading >
        <Navbar name="Shahad"/>
      </Heading>


        <Stack mb={"10rem"} minH={"20rem"} direction={{ base: 'column', md: 'row' }}>
          <Flex p={4} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={3} w={'full'} maxW={'lg'}>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: '#23B7B2',
                    zIndex: -1,
                  }}>
                  NOT ALONE
                </Text>
                <br />{' '}
                <Text color={'#23B7B2'} as={'span'}>
                  you're never alone
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                This website will allow you to meet new people with the same interests as you, they will help you
                with whatever you want, and spen time with you
                
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button
                  rounded={'full'}
                  bg={'#23B7B2'}
                  color={'white'}
                  _hover={{
                    bg: '#23B7B2',
                  }}>

                    <HashLink to={"#how"}>How do you start</HashLink>

                 
                  
                </Button>
                <Button rounded={'full'}> <HashLink to={"#footer"}>Contact us</HashLink>
                </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={"15%"}>
            <Image
            mt="3rem"
            mr={"10rem"}
            borderRadius={"30px"}
            width={"70rem"}
            height="30rem"
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                bannerimage
              }
            />
          </Flex>
        </Stack>

        <HowItWorks/>


          <Container maxWidth="container.xl" my="3">
            <Heading align="center" as="h3" size="xl" pb="2" >
              Categories
            </Heading>
            </Container>




              <Box>
              <Container maxW="container.xl" mt={10}>
              <Grid
                templateColumns={{
                  sm: 'repeat(1, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(3, 1fr)',
                  xl: 'repeat(3, 1fr)',
                  base: 'repeat(1, 1fr)',
                }}
                gap={6}
              >
                <VStack borderColor='gray.200'>
                <Image
                    w="100%"
                    borderRadius="lg"
                    src={tutor}
                    alt="image three"
                  />
                  <Button colorScheme="teal" variant="link" mt="5">
                    Tutoring
                  </Button>
                </VStack>
                <VStack>
                  <Image
                    w="100%"
                    borderRadius="lg"
                    src={gaming}
                    alt="image three"
                  />
                  <Button colorScheme="teal" variant="link" mt="5">
                    Gaming
                  </Button>
                </VStack>
                <VStack>
                  <Image
                    w="100%"
                    borderRadius="lg"
                    src={travlling}
                    alt="image three"
                  />
                  <Button colorScheme="teal" variant="link" mt="5">
                    Travelling
                  </Button>
                </VStack>
                <VStack>
                  <Image
                    w="100%"
                    borderRadius="lg"
                    src={shopping}
                    alt="image three"
                  />
                  <Button colorScheme="teal" variant="link" mt="5">
                    Shopping
                  </Button>
                </VStack>
                <VStack>
                  <Image
                    w="100%"
                    borderRadius="lg"
                    src={cooking}
                    alt="image three"
                  />
                  <Button colorScheme="teal" variant="link" mt="5">
                    Cooking
                  </Button>
                </VStack>
                <VStack>
                  <Image
                    w="100%"
                    borderRadius="lg"
                    src={art}
                    alt="image three"
                  />
                  <Button colorScheme="teal" variant="link" mt="5">
                    Art
                  </Button>
                </VStack>
                <VStack>
                  <Image
                    w="100%"
                    borderRadius="lg"
                    src={hosting}
                    alt="image three"
                  />
                  <Button colorScheme="teal" variant="link" mt="5">
                    Hosting
                  </Button>
                </VStack>
                <VStack>
                  <Image
                    w="100%"
                    borderRadius="lg"
                    src={babysitting}
                    alt="image three"
                  />
                  <Button colorScheme="teal" variant="link" mt="5">
                    Baby sitter
                  </Button>
                </VStack>
                
                
              </Grid>
            </Container>
            </Box>
            <br/>
            <br/>
            <Footer/> 

         
            </>
      );
}

export default Banner