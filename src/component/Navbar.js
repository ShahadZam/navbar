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
    ButtonGroup,
    Avatar,
    Select,
    UnorderedList,
    List,
    Link
  } from '@chakra-ui/react';
import React from 'react'
import logo from '../images/logo.png';
import { HashLink } from 'react-router-hash-link';
import profile from '../images/profile.png';
import logout from '../images/logout.png';


import {useState, useEffect, useRef} from 'react';








function Navbar({name}) {
    const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });


  return (

    
    <Box mb={"5"} as="section"  pb={{ base: '12', md: '24' }} height="5rem" pt={"auto"}>
    <Box as="nav" bg="bg-surface" height="5rem" pt={"auto"}   py={{ base: '4', lg: '5' }}>
      
        <HStack spacing="10" justify="space-between">

      <Image boxSize="90px" src={logo} alt="brand" />
    

    <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {['My appointments', 'About us', 'How does it work'].map((item) => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup>
                <HStack spacing="3">
                  {/* <Button variant="ghost">Sign in</Button>
                  <Button variant="primary">Sign up</Button> */}
                

                <Box className='menu-container' ref={menuRef}>
        <Box className='menu-trigger' onClick={()=>{setOpen(!open)}}>
        <Image
    boxSize='10px'
    objectFit='cover'
    src={profile}
    alt='profile'/>
        </Box>

        <Box className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <Text>{name}</Text>
          <UnorderedList>
            <DropdownItem img = {profile} text = {"My Profile"}/>
            <DropdownItem img = {logout} text = {"Logout"}/>
          </UnorderedList>
        </Box>
      </Box>

                  
                </HStack>
              </Flex>
              </HStack>
      </Box>
    </Box>


  )
}

function DropdownItem(props){
    return(
      <List className = 'dropdownItem'>
        <Image src={props.img}></Image>
        <Link> {props.text} </Link>
      </List >
    );
  }

export default Navbar