import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import {MdMenu} from 'react-icons/md'
import { MdClose } from 'react-icons/md'

const Container=styled.div`
margin-top:70px;
width: 1290px;
height:72px;
display:flex;
align-items:center;
justify-content:space-between;
background-color:#fff;
border-radius:14px;


@media screen and (max-width: 800px) {
 width:100%;
background-color:rgba(0,0,0,0);
}

@media (min-width: 501px) and (max-width: 1300px){
width:100%;
 }
`

const Left=styled.div`
width:100%;
height:100%;
flex:1;
display:flex;
align-items:center;
padding:25px;
transition: all 1s ease;

@media screen and (max-width: 800px) {
  position:fixed;
  top:0;
  right:0;
  width:70%;
  height:100vh;
  padding-top:40px;
  flex-direction:column;
  background:hsl(0 0% 100% / 0.5);
  backdrop-filter:blur(5px);
  display:${props=>props.open ? 'flex' : 'none'};
  z-index:999;
  
 }
`
const Right=styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const Link=styled.a`
margin-right:25px;
text-decoration:none;
font-size:14px;
font-weight:700;
z-index:999;
color:#000;

@media screen and (max-width: 800px) {
 display:${props=>props.discord ==="true" ?"none" : ''};
 margin-bottom:${props=>props.discord ==="true" ?"" : '20px'};
 width:100%;
 text-align:center;
 margin:10px;
 font-size:24px;
}

&:active{
  color:#444;
}
`

const DiscordButton=styled.button`
background-color:#000;
color:#fff;
padding:10px 35px;
border:none;
border-radius:8px;
font-size:18px;
font-weight:700;
text-align:center;
`



const LogoContainer=styled.div`
width:250px;
height:250px;
position:absolute;
top:0;
left:calc(50% - 126.5px);

@media screen and (max-width: 500px) {
  height:150px;
  width:150px;
  left:calc(50% - 75px);
  top:0;
  }
`

const Logo=styled.img`
width:100%;
height:100%;
objet-fit:cover;

`

const Menu=styled.a`
display:none;

@media screen and (max-width: 800px) {
  display:flex;
  position:absolute;
  color: #1A132F;
  font-size:40px;
  top:10px;
  right:10px;
  z-index:9999;
  }
`

const NavContainer = () => {

  const [isOpen,setisOpen]=useState(false)


  return (
<>
    <Container>
    <Left open={isOpen}>
       <Link href='/'>TLAC</Link>
       <Link href='#roadmap'>Roadmap</Link>
       <Link href='/doxxing'>The Doxxing</Link>
       <Link href='/contact'>Contact Us</Link>
      
    </Left>
    {
         isOpen ?
         <Menu onClick={()=>{setisOpen(false)}} >
           <MdClose />
         </Menu>
         :
         <Menu onClick={()=>{setisOpen(true)}} >
         <MdMenu />
       </Menu>
       }
    <Right>
      <Link discord="true" href='https://discord.gg/9BvBTyN2S7'>
       <DiscordButton>Join Discord</DiscordButton>
      </Link>
    </Right>
 


    
  </Container>

<LogoContainer>
<Logo src={logo}/>
</LogoContainer>

</>

  )
}

export default NavContainer