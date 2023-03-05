import React from 'react'
import styled from 'styled-components'
import { Box, Button, Flex, Text as Typography } from "@chakra-ui/react";
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
        onClick={handleOpenModal}
        bg="gray.800"
        border="1px solid transparent"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.700",
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        <Typography color="white" fontSize="md" fontWeight="medium" mr="2">
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
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
