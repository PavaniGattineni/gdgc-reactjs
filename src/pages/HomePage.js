import React from 'react'
import styled from 'styled-components'
import Counter from '../components/Counter/Counter'
import RoadMap from '../components/RoadMap/RoadMap'
import frame from '../assets/Frame.png';
import Mask from '../assets/Mask.png'
import NavContainer from '../components/NavContainer/NavContainer'
import SocialMedia from '../components/Socialmedia/SocialMedia'
import Barcode from '../components/Barcode/Barcode'


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
  margin-top:100px;
  }
`
const Title=styled.h1`
font-size:75px;
font-weight:700;
margin:12px;

@media screen and (max-width: 500px) {
font-size:40px;
}
`
const Desc=styled.h4`
font-size:24px;
font-weight:600;
@media screen and (max-width: 500px) {
  font-size:18px;
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
margin-bottom:43px;

@media screen and (max-width: 500px) {
  font-size:14px;
  }
`

const CountDownContainer=styled.div`
margin-top:97px;
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
   width:100%;
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
  margin:0 20px;
  }

 
`

const GroupDesc=styled.p`
font-size:16px;
font-weight:600;
z-index:99;

@media screen and (max-width: 500px) {
  font-size:12px;
  margin:0 20px;
  }

  @media (min-width: 501px) and (max-width: 1300px){  
    margin:0px 200px;
    }
`

const GroupImg=styled.div`
width:640px;
height:486px;
border-radius:30px;
background-color:#6B695E;
z-index:99;
margin:10px 0;


@media screen and (max-width: 1300px) {
  width:300px;
  height:300px;
  margin:10px;
  }
`
const PartnerShipContainer=styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-bottom:125px;
position:relative; 


@media screen and (max-width: 500px) {
margin-bottom:20px;  
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

const Partner=styled.div`
width:273px;
height:104px;
background-color: #6B695E;
margin-right:67px;
border-radius:20px;
z-index:99;

&:nth-child(4){
  margin:0px;
}

@media screen and (max-width: 1300px) {
    margin:20px 0;  

    &:nth-child(4){
      margin:20px;
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

const BarcodeDesc=styled.p`
font-size:14px;
font-weight:600;
margin:10px;

@media screen and (max-width:900px){
  margin-bottom:100px;
}
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
margin-right:25px;
text-decoration:none;
font-size:14px;
font-weight:700;
z-index:999;
color:#000;`


const HomePage = () => {
  return (
    <Container>

       <NavContainer />

        <TitleContainer>
          <Title>The Luxury Asset Club</Title>
          <Desc>The Luxury Asset Club is an exclusive online community of owners looking to revolutionize the <br/> ownership of rare exclusive collectibles.</Desc>
          <MintContainer>
          <MintButton>Mint</MintButton>
          </MintContainer>
        </TitleContainer>
        <Link href='https://discord.gg/8jfZP5TW'>
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
              The Luxury Asset Club
              </GroupTitle>
              <GroupDesc>
              We at TLAC have created a community for avid
              collectors of one of a kind luxury assets. By
              combining the underlying technology of smart
              contracts and NFT’s with the gamified model of a
              raffle, to create the world’s first Meta-Raffle. Each
              raffle will feature a new item that you as a member
              will help choose.
              <br/>
              <br/>
              How do I join this exclusive community? By
              purchasing an exclusive TLAC raffle ticket not only
              have you entered for a chance to win the featured
              asset, but it also gives you access to our exclusive,
              token locked Tellie. Ownership of the NFT is the
              only way to unlock the gate. Here is where you will
              have a chance to vote on future offerings, charity
              partnerships, as well as merchandise and exclusive
              content. Members will also have access to attend
              item release parties
              </GroupDesc>
          </GroupInfo>
          <GroupImg></GroupImg>
        </Group>

        <Group>
          <GroupImg></GroupImg>
          <GroupInfo right="false">
           <GroupTitle>Philanthropy</GroupTitle>
           <GroupDesc>As an NFT project, we feel it is our obligation to use this technology as means of helping those that are less fortunate. Our model allows us to connect and reach a multitude of different charities and organizations and reward them with not onlya platform but state of the art methods ofraising funds. Because of this, every raffle, we as a community will choose a charity to partner with.
           </GroupDesc>
          </GroupInfo>
        </Group>

        <Group>
        
          <GroupInfo right="true">
            <GroupTitle>Tokenizing Select Luxury Assets</GroupTitle>
              <GroupDesc>
                    Interested in raffling off your own one of a kind
                    asset? Contact our team and let us know about
                    your item. Our in house art curator will then
                    authenticate and validate your item while
                    determining if its fits TLAC select criteria.
            </GroupDesc>
          </GroupInfo>
          <GroupImg></GroupImg>
        </Group>  
        
        <PartnerShipContainer>
          <PartnerShipTitle>PARTNERSHIPS</PartnerShipTitle>
          <Partners>
            <Partner></Partner>
            <Partner></Partner>
            <Partner></Partner>
            <Partner></Partner>
          </Partners>
         <MaskContainer></MaskContainer>
        </PartnerShipContainer>

      </AboutContainer>

      <Barcode />
      <BarcodeDesc>TLAC 2022. All Rights Reserved</BarcodeDesc>

      <FrameContainer>
        <Frame />
      </FrameContainer>


      <SocialMedia size="large"/>
    </Container>
  )
}

export default HomePage