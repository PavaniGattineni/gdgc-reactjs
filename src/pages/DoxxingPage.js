import React from 'react'
import styled from 'styled-components'
import Barcode from '../components/Barcode/Barcode'
import NavContainer from '../components/NavContainer/NavContainer'
import SocialMedia from '../components/Socialmedia/SocialMedia'
import Mask from '../assets/Mask.png'

const Container=styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background: linear-gradient(90.13deg, #efe9ce 0.15%, #cfdbd9 99.93%);
text-align:center;
position:relative;
`
const TitleContainer=styled.div`
margin-top:165px;
margin-bottom:30px;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
position:relative;
`
const Title=styled.h1`
font-size:75px;
font-weight:700;
margin-bottom:10px;
`
const Desc=styled.p`
font-size:24px;
font-weight:600;
`
const VideoContainer=styled.div`
width: 1290px;
height: 486px;
border-radius:30px;
display:flex;
align-items:center;
justify-content:center;
background-color:#6B695E;
margin-bottom:64px;
`
const Arrow=styled.div`
width: 0; 
height: 0; 
border-radius:9px;
border-top: 65px solid transparent;
border-bottom: 65px solid transparent;
border-left: 65px solid rgba(196, 196, 196, 0.6);
 `

 const PartnersContainer=styled.div`
 width: 1290px;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-wrap:wrap;
 margin-bottom:150px;
 z-index:99;

 `
 const Partner=styled.div`
 width: 333.65px;
height: 421.45px;
margin-right:52.68px;
margin-bottom:52.68px;
background-color:rgba(0, 0, 0, 0.1);
border-radius:30px;
z-index:99;


`

 const PartnerImg=styled.div`
 background-color:#6B695E;
 width:100%;
 border-radius:30px;
 height:333.65px;
 z-index:99;
 `
const Name=styled.p`
font-size:26px;
font-weight:600;
z-index:99;

`
const Position=styled.p`
font-size:14px;
font-weight:600;
z-index:99;
`

const BarcodeDesc=styled.p`
font-size:14px;
font-weight:600;
margin:10px;
`
const MaskContainer=styled.div`
width:100%;
height:663px;
position:absolute;
background:url(${Mask}) center no-repeat;
bottom:100px;
z-index:1;
`

const DoxxingPage = () => {
  return (
     <Container>
        <NavContainer />

        <TitleContainer>
           <Title>The Doxxing</Title>
           <Desc>The Luxury Asset Club is an exclusive online community of owners looking to revolutionize the <br/> ownership of rare exclusive collectibles.</Desc>
           <SocialMedia />
        </TitleContainer>
        <VideoContainer>
           <Arrow />
        </VideoContainer>
        <PartnersContainer>

           <Partner> 
             <PartnerImg /> 
             <Name>@Zarba.Eth</Name>
              <Position>Marketing Director</Position>
           </Partner>
           <Partner>
              <PartnerImg />
              <Name>@Gadzzz.Eth</Name>
              <Position>Technical Director</Position>
           </Partner>
           <Partner> 
            <PartnerImg />  
            <Name>@Calabrese.Eth</Name>
              <Position>Business Director</Position>
            </Partner>
           <Partner>
              <PartnerImg />
              <Name>@.Eth</Name>
              <Position>Developer</Position>
           </Partner>
           <Partner> 
              <PartnerImg />
              <Name>@Alexei.Eth</Name>
              <Position>Artist</Position>
           </Partner>
      
             <Partner> 
              <PartnerImg/>
              <Name>  @Studio90s</Name>
              <Position>Consultants</Position>
           </Partner>
        </PartnersContainer>
        <Barcode />
        <BarcodeDesc>TLAC 2022. All Rights Reserved</BarcodeDesc>
        <MaskContainer></MaskContainer>
     </Container>
  )
}

export default DoxxingPage