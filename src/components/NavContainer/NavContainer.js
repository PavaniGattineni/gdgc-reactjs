import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const Container=styled.div`
margin-top:70px;
width: 1290px;
height:72px;
display:flex;
align-items:center;
justify-content:space-between;
background-color:#fff;
border-radius:14px;
`

const Left=styled.div`
padding:25px;
`
const Right=styled.div`
padding:13px;
`
const Link=styled.a`
margin-right:25px;
link-style-decoration:none;
font-size:14px;
font-weight:700;
`

const DiscordButton=styled.button`
background-color:#000;
color:#fff;
padding:10px 35px;
border:none;
border-radius:8px;
font-size:18px;
font-weight:700;
`
const Logo=styled.img`
position:absolute;
top:0;
`

const NavContainer = () => {
  return (
      <>
    <Container>
    <Left>
       <Link>TLAC</Link>
       <Link>Roadmap</Link>
       <Link>The Doxxing</Link>
       <Link>Contact Us</Link>

    </Left>
    <Right>
       <DiscordButton>Join Discord</DiscordButton>
    </Right>
  </Container>

   <Logo src={logo}/>
   </>

  )
}

export default NavContainer