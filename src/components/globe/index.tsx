import React from 'react'
import styled,{ keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(10deg);
  } to {
    transform: rotate(-10deg);
  } 
`

const Globe = styled.img`
  animation: ${rotate} 8s alternate infinite;
  height: 70%;
  width: 32%;
`

function SimpleGlobe() {

  return (
   <>
    <Globe src='https://cdn.pixabay.com/photo/2016/04/24/04/53/globe-1348777_960_720.png' alt='globe' />
   </>
  )
}

export default SimpleGlobe
