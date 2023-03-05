import React from 'react'
import styled,{ keyframes } from 'styled-components'

const translate = keyframes`
  from {
    transform: translateY(10px);
  } to {
    transform: translateY(-10px);
  } 
`

const Globe = styled.img`
  animation: ${translate} 5s alternate infinite;
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
