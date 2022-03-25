import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'
import NavContainer from '../components/NavContainer/NavContainer'
import SocialMedia from '../components/Socialmedia/SocialMedia'

const Container=styled.div`
width:100%;
background: linear-gradient(90.13deg, #efe9ce 0.15%, #cfdbd9 99.93%);
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
position:relative;
`
const DetailsContainer=styled.div`
width:1078px;
display:flex;
flex-direction:column;
align-items:center;

@media screen and (max-width:500px){
    width:100%;
}
`

const Title=styled.h1`
font-size:75px;
font-weight:700;
margin-top:100px;
text-align:center;

@media screen and (max-width:500px){
    font-size:50px;
    margin-top:30px;
}
`

const Info=styled.p`
font-size:20px;
line-height:30px;
font-weight:600;

@media screen and (max-width:500px){
  padding:0 20px;
}
`

const FaqsPage = () => {
  return (
    <Container>
        <NavContainer />
        <DetailsContainer>

        <Title>FAQS</Title>
        <Info>
        How many tickets can I mint?
        In order to allow for fairness and an opportunity for the community to grow, we will limit it to five tickets per mint. Although you will be able to purchase more as they migrate to secondary marketplaces.
        <br />
        <br />
       
        What do I do if I have a winning ticket?
        Each winning ticket will include specific instructions to follow in order to guarantee receipt of the item. TLAC will coordinate hand delivery of all assets.
        <br />
        <br />

        What if I want to raffle off an item?
        Navigate to the contact us page and leave a detailed description of the item, and our in-house curator will review the information. If your item fits The Luxury Asset Club’s criteria it may be chosen for an upcoming raffle.
        <br />
        <br />

        How do I know if my raffle ticket is authentic?
        All TLAC NFT meta-raffle tickets will be minted from theluxuryassetclub.eth address, which can be verified here on the blockchain.
        <br />
        <br />


        When can we mint a TLAC NFT?
        The public launch will be held on April 21st, 2022, 8 days after the whitelist launch on April 13th, 2022 at 12AM EST. 
        <br />
        <br />
        
        When will the winner be revealed?
        To allow for the secondary market to organically grow, we will reveal the winner 8 days after full sell-out. 
        <br />
        <br />

        How much is a TLAC NFT raffle ticket?
        The cost to mint is .1eth.

        </Info>
        </DetailsContainer>
        <Footer />
        <SocialMedia />
    </Container>
  )
}

export default FaqsPage