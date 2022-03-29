import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Barcode from '../Barcode/Barcode'

const Container=styled.div`
width:100%;
height:230px;
background-color:#000;
display:flex;
align-items:center;
justify-content:space-between;
position:relative;
margin-top:295px;
color:#fff;
text-align:center;

@media screen and (max-width:500px){
  padding-top:70px;
  margin-bottom:50px;
  margin-top:200px;
}

`
const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
z-index:999;


.link{
  text-decoration:none;
  color:#fff;
  font-size:20px;
  font-weight:600;
  margin:5px 0;

  @media screen and (max-width:500px){
    font-size:14px;
  }
}
`
const Right=styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;

@media screen and (max-width:500px){
 
}


.link{
  text-decoration:none;
  color:#fff;
  font-size:20px;
  font-weight:600;
  margin:5px 0;

  @media screen and (max-width:500px){
    font-size:14px;

  }
}
`

const BarcodeContainer=styled.div`
position:absolute;
display:flex;
flex-direction:column;
align-items:center;
left:calc(50% - 175px);
top:-200px;
text-align:center;


@media screen and (max-width:1200px){
  width:100%;
  top:-170px;
  left:0;
}
`

const BarcodeDesc=styled.p`
font-size:14px;
font-weight:600;
margin-top:10px;


@media screen and (max-width:500px){
font-size:12px;
}
`

const Footer = () => {
  return (

    <Container>

        <Left>
    
            <Link to={'/contact'} className='link'>Contact</Link>
            <Link to={'/about'} className='link'>About Us</Link>
            <Link to={'/terms'} className='link'>Terms Of Use</Link>
      
        </Left>

        <Right>
            <Link to={'/doxxing'} className='link'>Team</Link>
            <Link to={'/'} className='link'>LinkTree</Link>
            <Link to={'/faqs'} className='link'>FAQS</Link>
        </Right>    

            <BarcodeContainer>
            <Barcode />
            <BarcodeDesc>TLAC 2022. All Rights Reserved</BarcodeDesc>
            </BarcodeContainer>
    </Container>
  )
}

export default Footer