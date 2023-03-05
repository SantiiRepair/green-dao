import React from 'react'
import styled from 'styled-components'
import { Flex, Text as Typography } from "@chakra-ui/react";
import SimpleGlobe from '../../components/globe'

const Text = styled.div` 
 flex-direction: column;
 color: #fff;
`

const Tow = styled.div` 
 display: flex;
 flex-direction: row;
 justify-content: center;
`

function Home() {

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
     <Typography>Lets save our world, contribute now.</Typography>
     <Typography>Time run and it dont stop.</Typography>
     <Typography>If us dont do it, no body do it.</Typography>
    </Text>
    <SimpleGlobe />
   </Tow>
  </Flex>
 )
}

export default Home
