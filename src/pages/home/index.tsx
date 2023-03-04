import React from 'react'
import styled from 'styled-components'
import SimpleGlobe from '../../components/globe'

const Hero = styled.div` 
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  font-size: calc(10px + 2vmin);
`

const Text = styled.div` 
 display: flex;
 flex-direction: column;
`

const Typography = styled.h1` 
  font-size: calc(10px + 2vmin);
  color: #fff;
`

const Tow = styled.div` 
 display: flex;
 flex-direction: row;
`

function Home() {

 return (
  <Hero>
   <Tow>
    <Text>
     <Typography>Lets save our world, contribute now.</Typography>
     <Typography>Time run and dont stop.</Typography>
     <Typography>If us dont do it, no body do it.</Typography>
    </Text>
    <SimpleGlobe />
   </Tow>
  </Hero>
 )
}

export default Home
