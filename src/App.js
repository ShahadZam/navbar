import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  Badge
} from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './component/Banner'
 import customTheme  from './extendTheme';
 import image from './images/bg.svg'
 import './style.css'; 




import { ColorModeSwitcher } from './ColorModeSwitcher';
import Footer from './component/Footer';
import HowItWorks from './component/HowItWorks';

function App() {
  return (
    <ChakraProvider >
    <div  className=" myDiv" >
      
          <BrowserRouter>
          <Routes>
         
          <Route path='/home' element={<Banner />} />
           </Routes>
           </BrowserRouter>
           
  
        </div>
          
   </ChakraProvider>

  );
}

export default App;
