import React, { useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Counter from '../components/Counter/Counter'
import RoadMap from '../components/RoadMap/RoadMap'
import frame from '../assets/Frame.png';
import Mask from '../assets/Mask.png'
import NavContainer from '../components/NavContainer/NavContainer'
import SocialMedia from '../components/Socialmedia/SocialMedia'
import Footer from '../components/Footer/Footer';
import {MdPlayArrow} from 'react-icons/md'

import SuperWorld from '../assets/Superworld LOGO.png'
import Enforceable from '../assets/EnforceableNFT LOGO.png'
import Makeawish from '../assets/Make-A-Wish Logo.png'
import woodlawn from '../assets/Woodlawn Media Logo.PNG'



import video1 from '../assets/Kobe.MOV'
import video2 from '../assets/Makeawish.MOV'
import video3 from '../assets/Pressvideo.mp4'


const Container=styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
background: linear-gradient(90.13deg, #efe9ce 0.15%, #cfdbd9 99.93%);
position:relative;
`

const DiscordButton2=styled.button`
background-color:#000;
color:#fff;
padding:10px 35px;
border:none;
border-radius:8px;
font-size:18px;
font-weight:700;
text-align:center;
margin-bottom:20px;

@media screen and (min-width:800px){
display:none;
}
`


const TitleContainer=styled.div`
width:100%;
text-align:center;
margin-top:165px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;

@media screen and (max-width:500px){
  width:100%;
  margin-top:25px;
  }
`
const Title=styled.h1`
font-size:75px;
font-weight:700;
margin:12px 0;

@media screen and (max-width: 500px) {
font-size:40px;
}
`
const Desc=styled.h4`
font-size:24px;
font-weight:600;
@media screen and (max-width: 500px) {
  font-size:18px;
  padding:0 25px;
  }
`
const MintContainer=styled.div`
width:252px;
border:1px solid #000;
margin-top:35px;
padding:10px;
border-radius:14px;
margin-bottom:120px;

@media screen and (max-width: 500px) {
  width:130px;
  height:60px;
  margin-bottom:50px;
  }
`

const MintButton=styled.button`
font-size:38px;
font-weight:700;
padding:6px 72px;
border:none;
background-color:#000;
color:#fff;
border-radius:8px;

@media screen and (max-width: 500px) {
  padding:10px 35px;
  height:40px;
  font-size:14px;
  }
`

const RoadMapContainer=styled.div`
width:1052px;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;

@media screen and (max-width: 500px) {
width:100%;

}

`
const RoadmapTitle=styled.h1`
font-size:45px;
font-weight:700;

@media screen and (max-width: 500px) {
  font-size:30px;
  }
`

const RoadmapSubTitle=styled.h4`
margin-bottom:40px;
font-size:18px;
font-weight:600;
color:rgba(0, 0, 0, 0.6);
margin-bottom:60px;

@media screen and (max-width: 500px) {
  font-size:14px;
  margin-bottom:90px;
  }
`

const CountDownContainer=styled.div`
margin-top:97px;
width:100%;
display:flex;
align-items:center;
flex-direction:column;

@media screen and (max-width: 500px) {
  margin-top:30px;
  }
`

const CountTitle=styled.h1`
font-size:45px;
font-weight:700;
margin-bottom:10px;
text-align:center;

@media screen and (max-width: 500px) {
  font-size:24px;
  margin:0;
  }
`
const AboutContainer=styled.div`
width:1290px;
height:100%;
display:flex;
align-items:center;
flex-direction:column;
margin-top:120px;

@media screen and (max-width: 500px) {
  width:100%;
  margin-top:20px;
  }
`
const Group=styled.div`
height:640px;
width:100%;
display:flex;
align-items:center;
justify-content:center;

@media screen and (max-width: 1300px) {
  flex-direction:column;
   height:100%;

   &:nth-child(2){
     flex-direction:column-reverse;
   }
  }
`

const GroupInfo=styled.div`
width:100%;
flex:1;
margin-right:${props=>props.right === 'true' ? '28px' : ''};
margin-left:${props=>props.right !== 'true' ? '28px' : ''};
z-index:99;

@media screen and (max-width: 500px) {
  margin:20px 0;
  }
  @media (min-width: 501px) and (max-width: 1300px){  
    margin:10px;
    }

`

const GroupTitle=styled.h1`
font-size:45px;
font-weight:700;
margin-bottom:15px;
z-index:99;
text-align:center;

@media screen and (max-width: 500px) {
  font-size:24px;
  padding:0 10px;
  }

 
`

const GroupDesc=styled.p`
font-size:16px;
font-weight:600;
z-index:99;

@media screen and (max-width: 500px) {
  font-size:14px;
  padding:0 20px;
  }

  @media (min-width: 501px) and (max-width: 1300px){  
    margin:0px 200px;
    }
`


const GroupVideo=styled.div`
width:640px;
height:486px;
border-radius:30px;
z-index:99;
display:flex;
align-items:center;
justify-content:center;
position:relative;



@media screen and (max-width: 1300px) {
  width:340px;
  height:250px;
  }
`
const Video=styled.video`
width:${props=>props.potrait==="true"? "250px" : "100%"};
height:100%;
border-radius:${props=>props.potrait==="true"? "20px" : "30px"};

`
const VideoButton=styled.button`
position:absolute;
z-index:99;
top:50%;
left:calc(50% - 25px);
height:50px;
width:50px;
display:flex;
align-items:center;
border-radius:50%;

display:${props=>props.play1 ? 'none':'' };
display:${props=>props.play2 ? 'none':'' }
display:${props=>props.play3 ? 'none':'' }

`

const PartnerShipContainer=styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-bottom:100px;
position:relative; 


@media screen and (max-width: 500px) {
margin-bottom:20px;
margin:0 20px;  
  } 

  @media (min-width: 501px) and (max-width: 1300px){  
    margin-bottom:50px;
    }
  
`

const PartnerShipTitle=styled.h1`
font-size:45px;
font-weight:700;
margin-bottom:54px;
z-index:99;

@media screen and (max-width: 500px) {
font-size:24px; 
margin:20px 0;
  }

  @media (min-width: 501px) and (max-width: 1300px){  
    margin-bottom:20px;
    }
`

const Partners=styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
z-index:99;

@media screen and (max-width: 1300px) {
  width:100%;
  flex-direction:column;  
  }

`


const PartnerImg=styled.img`
width:273px;
height:104px;
margin-right:67px;
object-fit:contain;

&:nth-child(4){
  margin:0px;
}
@media screen and (max-width: 1300px) {
  margin:10px 0;  

  &:nth-child(4){
    margin:10px;
  }
}
`

const MaskContainer=styled.div`
position:absolute;
width: 100%;
height: 663px;
background:url(${Mask}) center no-repeat;
top:-150px;
`


const FrameContainer=styled.div`
width:100%;
height:100vh;
position:absolute;
top:6%;
`

const Frame=styled.div`
width:100%;
height:100%;
mix-blend-mode: darken;
background:url(${frame}) top no-repeat;
z-index:-99;
`
const Link=styled.a`

text-decoration:none;
font-size:14px;
font-weight:700;
z-index:999;
color:#000;`


const HomePage = () => {
  const videos1=useRef(); 
  const videos2=useRef(); 
  const videos3=useRef(); 

const [play1,setplay1]=useState(false);
const [play2,setplay2]=useState(false);
const [play3,setplay3]=useState(false);


useLayoutEffect(() => {
  if (play1) videos1.current.play();
  if (play2) videos2.current.play();
  if (play3) videos3.current.play();

}, [play1,play2,play3])
  
  return (
    <Container>

       <NavContainer />

        <TitleContainer>
          <Title>TLAC</Title>
          <Desc>TLAC is an exclusive online community of owners looking to revolutionize the <br/> ownership of rare exclusive collectibles.</Desc>
          <MintContainer>
          <MintButton>Mint</MintButton>
          </MintContainer>
        </TitleContainer>
        <Link href='https://discord.gg/9BvBTyN2S7'>
        <DiscordButton2>Join Discord </DiscordButton2>
        </Link>
      
      <RoadMapContainer>
        <RoadmapTitle>#TLAC ROADMAP</RoadmapTitle>
        <RoadmapSubTitle>The Creators Of The Meta-Raffle</RoadmapSubTitle>
         <RoadMap />
      </RoadMapContainer>
      
      <CountDownContainer>
        <CountTitle>WHITELIST COUNTDOWN</CountTitle>
        <Counter />
      </CountDownContainer>

      <AboutContainer>
        <Group>
          <GroupInfo right="true">
              <GroupTitle>
              TLAC
              </GroupTitle>
              <GroupDesc>
              The Luxury Asset Club is an exclusive online community of owners pushing the digital
              collectible world into new territory. TLAC uses group economics & the community model to help
              liquidate extremely collectible physical assets. It starts with the private mint of the Luxury Asset
              Club's blue-chip offering on 4/13/2022, the anniversary of Kobe’s final NBA game. There will be
              3 randomly generated winning tickets, and each NFT will be a digital replica of the 18K Rose
              Gold Kobe Bryant signed Hublot (DYOR) delivered as 8,024 digital twins. The physical watch, of
              which there are only three in the world and holds an estimated value of $3,000,000. Upon
              sellout, one club member will win the watch.
              <br />
              <br />

              As our community develops, TLAC will forever change the process in which ultra-luxury assets
              are sold and held. The Luxury Asset Club will be stored and minted on the Polygon Network.
              </GroupDesc>
          </GroupInfo>
          <GroupVideo >
            <Video controls muted  src={video1} type='video/quicktime' ref={videos1}> 
            </Video>
            <VideoButton onClick={()=>setplay1(true)} play1={play1}>
               <MdPlayArrow  size={'50px'} />
            </VideoButton>
          </GroupVideo>
        </Group>
=
        <Group>
          <GroupVideo >
            <Video src={video2} controls muted   type="video/quicktime" potrait="true"   ref={videos2}/>
            <VideoButton onClick={()=>setplay2(true)} play2={play2}>
               <MdPlayArrow  size={'50px'} />
            </VideoButton>
          </GroupVideo>
          <GroupInfo right="false">
           <GroupTitle>Philanthropy</GroupTitle>
           <GroupDesc>
           It is our obligation as an NFT project to use web3 technology to help the less fortunate. Our
          business model allows us to bridge innovation with impact. Every raffle we run will be partnered
          with a charity the community chooses. Charitable donations will be made from the proceeds of
          each raffle. We believe that doing so will help different charitable organizations with their current
          objectives while serving them a revolutionary platform with innovative methods for fundraising.
          For The Luxury Asset Club’s first meta-raffle, a percentage of proceeds have been arranged to
          be donated to the Make-A-Wish foundation, Greater LA Chapter.
           </GroupDesc>
          </GroupInfo>
        </Group>

        <Group>
        
          <GroupInfo right="true">
            <GroupTitle>In The Press</GroupTitle>
              <GroupDesc>
                Over the last nine months of putting together this project, we have been fortunate enough to be
              featured in over 200 publications around the globe and seen in Times Square..Twice!
            </GroupDesc>
          </GroupInfo>
          <GroupVideo >
            <Video src={video3} controls playsInline  type='video/mp4' potrait="true" ref={videos3}/>
            <VideoButton onClick={()=>setplay3(true)} play3={play3}>
               <MdPlayArrow  size={'50px'} />
            </VideoButton>
          </GroupVideo>
        </Group>  
        
        <PartnerShipContainer>
          <PartnerShipTitle>PARTNERSHIPS</PartnerShipTitle>
          <Partners>
           
            <PartnerImg src={SuperWorld}/>
            <PartnerImg src={Makeawish}/>
            <PartnerImg src={Enforceable} cover="true"/>
            <PartnerImg src={woodlawn}/>
          </Partners>
         <MaskContainer></MaskContainer>
        </PartnerShipContainer>

      </AboutContainer>
      <Footer />

      <FrameContainer>
        <Frame />
      </FrameContainer>


      <SocialMedia size="large"/>
    </Container>
  )
}

export default HomePage