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



const TitleContainer=styled.div`
width:100%;
text-align:center;
margin-top:165px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;
`
const Title=styled.h1`
font-size:75px;
font-weight:700;
margin:12px;
`
const Desc=styled.h4`
font-size:24px;
font-weight:600;
`
const MintContainer=styled.div`
width:252px;
border:1px solid #000;
margin-top:35px;
padding:10px;
border-radius:14px;
margin-bottom:120px;
`

const MintButton=styled.button`
font-size:38px;
font-weight:700;
padding:6px 72px;
border:none;
background-color:#000;
color:#fff;
border-radius:8px;

`

const RoadMapContainer=styled.div`
width:1052px;
display:flex;
flex-direction:column;
align-items:center;

`
const RoadmapTitle=styled.h1`
font-size:45px;
font-weight:700;

`

const RoadmapSubTitle=styled.h4`
margin-bottom:40px;
font-size:18px;
font-weight:600;
color:rgba(0, 0, 0, 0.6);
margin-bottom:43px;
`

const CountDownContainer=styled.div`
margin-top:97px;
display:flex;
align-items:center;
flex-direction:column;
`

const CountTitle=styled.h1`
font-size:45px;
font-weight:700;
margin-bottom:10px;
`
const AboutContainer=styled.div`
width:1290px;
height:100%;
display:flex;
align-items:center;
flex-direction:column;
margin-top:120px;
`
const Group=styled.div`
height:640px;
width:100%;
display:flex;
align-items:center;
`

const GroupInfo=styled.div`
flex:1;
margin-right:${props=>props.right === 'true' ? '28px' : ''};
margin-left:${props=>props.right !== 'true' ? '28px' : ''};
z-index:99;
`

const GroupTitle=styled.h1`
font-size:45px;
font-weight:700;
margin-bottom:15px;
z-index:99;
`

const GroupDesc=styled.p`
font-size:16px;
font-weight:600;
z-index:99;

`

const GroupImg=styled.div`
width:640px;
height:486px;
border-radius:30px;
background-color:#6B695E;
z-index:99;

`
const PartnerShipContainer=styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-bottom:125px;
position:relative; 
`

const PartnerShipTitle=styled.h1`
font-size:45px;
font-weight:700;
margin-bottom:54px;
z-index:99;

`

const Partners=styled.div`
display:flex;
align-items:center;
z-index:99;

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
      <SocialMedia />

        </TitleContainer>
      
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

    </Container>
  )
}

export default HomePage