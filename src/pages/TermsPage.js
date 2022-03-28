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
width:967.63px;
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
margin-top:110px;
text-align:center;

@media screen and (max-width:500px){
    font-size:50px;
    margin-top:30px;
}
`

const Info=styled.p`
font-size:24px;
line-height:36px;
font-weight:600;
margin-top:20px;

@media screen and (max-width:500px){
  padding:0 20px;
  font-size:18px;
}
`

const TermsPage = () => {
  return (
   <Container>
     <NavContainer />
     <DetailsContainer>
         <Title>Terms Of Use</Title>
         <Info>
         The Luxury Asset Club, TLAC, Meta-Raffle mint is decentralized software running on the Ethereum network. This website is only an interface built to help users interact with an Ethereum smart contract to mint assets related to The Luxury Asset Club Brand, and the website’s account system is only used to send email notifications. No Meta-Raffle or Asset ownership is managed by this website or by its parent company. Users are entirely responsible for the safety and management of their own private Ethereum wallets and validating all transactions generated by the website before approving them. Use of this website is at the user’s own risk and The Luxury Asset Club, it’s parent company, or any affiliated party, is not liable for any incorrect or failed transactions. Furthermore, as the contract runs on Ethereum,  The Luxury Asset Club or its parent company has no power to undo, reverse, or restore any transactions. 
        <br />
        <br />
        In order to use this website, and any related tools it may provide, you agree to hold The Luxury Asset Club and all affiliate companies harmless for any and all problems, errors, and failures no matter the cause or source of those errors and accept sole responsibility for all transactions. Please note, this is our only official page.

         </Info>
     </DetailsContainer>
     
     <Footer />
     <SocialMedia/>
   </Container>
  )
}

export default TermsPage