import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import meta from '../../media/metamask.png'

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
  color: #808080; 
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

  
const NavBtn = styled.nav` 
  display: flex; 
  align-items: center; 
  margin-right: 24px; 
  /* Third Nav */
  /* justify-content: flex-end; 
  width: 100vw; */
  @media screen and (max-width: 768px) { 
    display: none; 
  } 
`

  
const NavBtnConnect = styled.button` 
  border-radius: 8px; 
  background: #2adc2d; 
  padding: 10px 22px; 
  color: #000000; 
  outline: none; 
  border: none; 
  cursor: pointer; 
  transition: all 0.2s ease-in-out; 
  text-decoration: none; 
  /* Second Nav */
  margin-left: 24px; 
  &:hover { 
    transition: all 0.2s ease-in-out; 
    background: #fff; 
    color: #808080; 
  } 
`

  
function Navbar() { 

  return ( 

    <> 

      <Nav> 

        <Bars /> 

        <NavMenu> 

          <NavData href='/about'>About</NavData> 

          <NavData href='/events'>Events</NavData> 

          <NavData href='/annual'>Annual Report</NavData> 

          <NavData href='/team'>Teams</NavData> 

          <NavData href='/blogs'>Blogs</NavData> 

          <NavData href='/sign-up'>Sign Up</NavData> 

        </NavMenu> 

        <NavBtn> 

         <NavBtnConnect>
          <img src={meta} alt='meta'/>
          <span/>
           Connect Wallet
         </NavBtnConnect> 
        </NavBtn> 

      </Nav> 

    </> 

  )
}

  

export default Navbar
