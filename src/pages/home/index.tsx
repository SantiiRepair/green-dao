// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import { Button, Flex, Text as Typography } from "@chakra-ui/react";
import SimpleGlobe from '../../components/globe'
import { useEthers } from "@usedapp/core";

type Props = {
  handleOpenModal: any;
};

const Text = styled.div`
 margin-top: 35px; 
 flex-direction: column;
 color: #fff;
`

const Tow = styled.div` 
 display: flex;
 flex-direction: row;
 justify-content: center;
`

function Home({ handleOpenModal }: Props) {
  const { activateBrowserWallet, account } = useEthers();

  function handleConnectWallet() {
    activateBrowserWallet();
  }
 return (
  <Flex
  flexDirection='row'
  display='flex'
  alignItems='center'
  bgColor='#282c34'
  bgImage='https://i.ibb.co/m4cyLkX/starry-sky-2675322-960-720.jpg'
  bgSize='200vh'
  bgRepeat='no-repeat'
  minH='100vh'
  >
   <Tow>
    <Text>
     <Typography 
     fontSize='30'
     >Lets save our world, contribute now.</Typography>
      <Typography 
     fontSize='30'
     >Time run and it dont stop.</Typography>
       <Typography 
     fontSize='30'
     >If us dont do it, no body do it.</Typography>
    {account ? (
      <Button
        bg="#2a4365"
        mt='40'
        border="1px solid transparent"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "#2a4365",
          backgroundColor: "#2a4365",
        }}
        borderRadius="0.75rem"
        px={3}
        color="#63b3ed"
        fontSize="1.125rem"
        fontWeight="500"
        height='2.5rem'
        minWidth='12.5rem'
      >
      <Typography as='a' href='/donate'>
        Donate Now
      </Typography>
      </Button>
  ) : (
      <Button
      onClick={handleConnectWallet}
      bg="#2a4365"
      mt='40'
      mb='3'
      height='2.5rem'
      minWidth='12.5rem'
      color="#63b3ed"
      fontSize="1.125rem"
      fontWeight="500"
      borderRadius="0.75rem"
      border="1px solid transparent"
      _hover={{
        borderColor: "#2a4365",
        color: "#4299e1",
      }}
      _active={{
        backgroundColor: "blue.800",
        borderColor: "blue.700",
      }}
    >
      Connect Wallet
    </Button>
  )}
    </Text>
  
    <SimpleGlobe />
   </Tow>
  </Flex>
 )
}

export default Home
