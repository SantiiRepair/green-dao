import React from 'react'
import styled from 'styled-components'

const Globe = styled.img` 
  height: 75%;
  width: 38%;
`

function SimpleGlobe() {

  return (
   <>
    <Globe src='https://cdn.pixabay.com/photo/2016/04/24/04/53/globe-1348777_960_720.png' alt='globe' />
   </>
  )
}

export default SimpleGlobe
