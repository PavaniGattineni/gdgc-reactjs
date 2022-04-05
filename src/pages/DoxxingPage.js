import React from 'react'
import styled from 'styled-components'
import NavContainer from '../components/NavContainer/NavContainer'
import SocialMedia from '../components/Socialmedia/SocialMedia'
import Mask from '../assets/Mask.png'
import Footer from '../components/Footer/Footer'
import video1 from '../assets/TheDoxxing.mp4'
import Ixiono from '../assets/Ixiono.jpeg';
import bulolo from '../assets/Bulolo.JPG'
import Moshe from '../assets/Moshe.png'

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

@media screen and (max-width: 500px) {
  margin-top:25px;
  margin-bottom:20px;
   }
`
const Title=styled.h1`
font-size:75px;
font-weight:700;
margin-bottom:10px;

@media screen and (max-width: 500px) {
   font-size:40px;
   }
`
const Desc=styled.p`
font-size:24px;
font-weight:600;
padding:0 200px;

@media screen and (max-width: 500px) {
   font-size:14px;
   padding:0 20px;
   }
`

const Link2=styled.a`
link-decoration-style:none;
display:none;

@media screen and (max-width: 500px) {
display:flex;
align-items:center;
margin:20px;
}
`
const DiscordButton2 = styled.button`
background-color: #000;
color: #fff;
width: 150px;
padding: 10px;
border: none;
border-radius: 10px;
font-size:14px;
font-weight: 700;
cursor:pointer;

&:hover{
    background-color:#444;
    color:#f6f6f6;
}
`
const VideoContainer=styled.video`
width: 750px;
height: 486px;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;

margin-bottom:64px;

@media screen and (max-width: 1200px) { 
  width:90%;
  height:250px;
   }
`
const Arrow=styled.div`
width: 0; 
height: 0; 
border-radius:9px;
border-top: 65px solid transparent;
border-bottom: 65px solid transparent;
border-left: 65px solid rgba(196, 196, 196, 0.6);
z-index:999;

@media screen and (max-width: 500px) {
  border-radius:5px;
   border-top: 25px solid transparent;
   border-bottom: 25px solid transparent;
   border-left: 25px solid rgba(196, 196, 196, 0.6);
   }
 `

 const PartnersContainer=styled.div`
 width: 1290px;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-wrap:wrap;
 gap:52.68px;
 margin-bottom:100px;
 z-index:99;

 @media screen and (max-width: 1200px) { 
  width:100%;
  flex-direction:column;
  margin-bottom:0px;
  gap:20px;
    }
 `
 const Partner=styled.div`
 width: 333.65px;
height: 421.45px;
background-color:rgba(0, 0, 0, 0.1);
border-radius:30px;
z-index:99;


@media screen and (max-width: 500px) { 
  width:250px;
  height:300px;
    }

`

 const PartnerImg=styled.img`
 width:100%;
 border-radius:30px;
 height:333.65px;
 z-index:99;

 @media screen and (max-width: 500px) { 
  height:250px;
    }
 `
const Name=styled.p`
font-size:26px;
font-weight:600;
z-index:99;

@media screen and (max-width: 500px) { 
    font-size:16px;
    }

`
const Position=styled.p`
font-size:14px;
font-weight:600;
z-index:99;

@media screen and (max-width: 500px) { 
font-size:12px;
    }
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
           <Desc>
           The TLAC team aims to give club members the same security that comes with authenticating the team as we do with our luxury assets. As procurers of Luxury Assets, we believe authenticating the team secures the credibility and value of both the project and the community.
           </Desc>
            <Link2 href='https://discord.gg/9BvBTyN2S7'>
            <DiscordButton2>Join Discord</DiscordButton2>
            </Link2>
        </TitleContainer>
        <VideoContainer src={video1} type='video/mp4' controls={true} muted>
           <Arrow />
        </VideoContainer>
        <PartnersContainer>

           <Partner> 
             <PartnerImg /> 
             <Name>Zarba.eth</Name>
              <Position>Creator</Position>
           </Partner>
           <Partner>
              <PartnerImg />
              <Name>Gadzzz.eth</Name>
              <Position>Creator</Position>
           </Partner>
           <Partner> 
            <PartnerImg src={bulolo}/>  
            <Name>Bulolo.eth</Name>
              <Position>Community Manager</Position>
            </Partner>
           <Partner>
              <PartnerImg src={Moshe}/>
              <Name>Moshe.eth</Name>
              <Position>In-House Curator</Position>
           </Partner>
           <Partner> 
              <PartnerImg src={Ixiono}/>
              <Name>Siraj.eth</Name>
              <Position>Head Developer</Position>
           </Partner>

        </PartnersContainer>
        <MaskContainer></MaskContainer>
        <Footer />
        <SocialMedia />

     </Container>
  )
}

export default DoxxingPage