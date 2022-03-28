import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'
import NavContainer from '../components/NavContainer/NavContainer'
import SocialMedia from '../components/Socialmedia/SocialMedia'

const Container=styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
background: linear-gradient(90.13deg, #efe9ce 0.15%, #cfdbd9 99.93%);
position:relative;
`

const Title=styled.h1`
font-size:75px;
font-weight:700;
margin-top:129px;
margin-bottom:19px;

@media screen and (max-width:500px){
    font-size:50px; 
    margin-top:30px;
    margin-bottom:10px;
}
`

const SubTitle=styled.h4`
font-size:45px;
font-weight:700;
margin-bottom:20px;

@media screen and (max-width:500px){
font-size:30px;
}
`
const Desc=styled.h5`
font-size:24px;
font-weight:600;
color:rgba(0, 0, 0, 0.6);
margin-bottom:50px;

@media screen and (max-width:500px){
    padding:0 15px;
    font-size:20px; 
    margin-bottom:25px;
}
`
const DetailsContainer=styled.div`
width:967.73px;

@media screen and (max-width:500px){
    width:100%; 
}
`
const Info=styled.p`
font-size:24px;
font-weight:600;
line-height:36px;

@media screen and (max-width:500px){
    padding:0 15px;
    font-size:18px; 
}
`


const AboutPage = () => {
  return (
    <Container>
         <NavContainer />
           <Title>About Us</Title>
           <SubTitle>#TLAC</SubTitle>
           <Desc>The creators of the Meta-Raffle</Desc>

           <DetailsContainer>
           <Info>
           The Luxury Asset Club is an exclusive online community of owners pushing the digital collectible world into new territory. It starts with the public mint of the Luxury Asset Club's blue-chip offering on 4/13/2022. Our goal is to use NFT’s and the underlying technology built upon smart contracts and combine them with the traditional odds associated with the raffle model. NFT’s allow for a transparent disbursement of tickets while allowing a fluid process of offering usually illiquid assets to a community of interested buyers.
            <br />
            <br />
          As our community develops, TLAC will forever change the process in which ultra-luxury assets are authenticated, sold, and owned within this Web 3.0 world.  
           </Info>
           </DetailsContainer>

          <Footer />
          <SocialMedia />
    </Container>
  )
}

export default AboutPage