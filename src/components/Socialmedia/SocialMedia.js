import React from 'react'
import styled from 'styled-components'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaTiktok } from 'react-icons/fa'
import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord'
import opensea from "../../assets/image 8.png"

const SocialMedias=styled.div`
position:absolute;
right:0;
top:0;
background-color:#000;
padding:10px;
display:flex;
flex-direction:column;
align-items:center;
border-radius:10px 0 0 10px; 
z-index:99;

@media screen and (max-width: 500px) {
   position:relative;
   flex-direction:row;
   width:100%;
   display:flex;
   align-items:center;
   justify-content:space-between;
    }
`
const Box=styled.div`
width:45px;
height:45px;
margin:10px;
background-color:#fff;
border-radius:6px;
display:flex;
justify-content:center;

@media screen and (max-width: 500px) {
    width:35px;
    height:35px;
    }
`


const Icon=styled.a`
color:#000;
font-size:28px;
display:flex;
align-items:center;
justify-content:center;
`

const SocialMediaImg=styled.img`
height:100%;
width:100%;
padding:3px;
cursor:pointer;
`
const Open=styled.a`
link-decoration-style:none;
`

const SocialMedia = () => {
  return (
    <SocialMedias >
    <Box>
    <Icon  href={"https://instagram.com/luxuryassetclub?utm_medium=copy_link"} ><FaInstagram /></Icon>
    </Box>
    <Box>
    <Icon  href="https://twitter.com/luxuryassetclub?s=21"> <FaTwitter  /></Icon>
        </Box>
    <Box>
    <Icon  href="http://www.tiktok.com/@theluxuryassetclub"> <FaTiktok  /></Icon>
     </Box>
     <Box>   
    <Icon  href="https://discord.gg/8jfZP5TW"><FaDiscord  /></Icon>
  </Box>
  <Box>
      <Open>
      <SocialMediaImg src={opensea}/>
      </Open>
   </Box>
  </SocialMedias> 
  )
}

export default SocialMedia