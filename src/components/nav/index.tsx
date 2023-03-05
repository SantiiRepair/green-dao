import React,{ useState } from 'react'
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import Layout from "./Layout";
import ConnectButton from "./ConnectButton";
import AccountModal from "./AccountModal";
import theme from './theme'

const Nav = styled.nav` 
  background: #282c34; 
  height: 45px; 
  display: flex; 
  justify-content: space-between; 
  padding: 0.2rem calc((100vw - 1000px) / 2); 
  z-index: 12; 
  /* Third Nav */
  /* justify-content: flex-start; */
`

  
const NavData = styled.a` 
  color: #808080;-
  display: flex; 
  align-items: center; 
  text-decoration: none; 
  padding: 0 1rem; 
  height: 100%; 
  cursor: pointer; 
  &.active { 
    color: #000000; 
  } 
`

  
const Bars = styled(FaBars)` 
  display: none; 
  color: #fff; 
  @media screen and (max-width: 768px) { 
    display: block; 
    position: absolute; 
    top: 0; 
    right: 0;
    transform: translate(-100%, 75%); 
    font-size: 1.8rem; 
    cursor: pointer; 
  } 
`

  
const NavMenu = styled.div` 
  display: flex; 
  align-items: center; 
  margin-right: -24px; 
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw; 
  white-space: nowrap; */
  @media screen and (max-width: 768px) { 
    display: none; 
  } 
`
  
const NavBtn = styled.button` 
  width: 12%;
  font-family: 'Righteous', sans-serif;
  border-radius: 10px; 
  background: #2adc2d; 
  color: #000000; 
  outline: none; 
  border: none; 
  cursor: pointer; 
  margin-right: 5px;  
`

  
function Navbar() { 
  const { isOpen, onOpen, onClose } = useDisclosure();
  return ( 

    <> 
      {/* <Nav> 
        <Bars /> 
        <NavMenu> 
          <NavData href='/home'>Home</NavData> 
          <NavData href='/events'></NavData> 
          <NavData href='/annual'>Annual Report</NavData> 
        </NavMenu> 
         <NavBtn>
           8
         </NavBtn>
  </Nav> */}
      <ChakraProvider theme={theme}>
       <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />-   
       </Layout>
     </ChakraProvider>
    </> 

  )
}

  

export default Navbar
