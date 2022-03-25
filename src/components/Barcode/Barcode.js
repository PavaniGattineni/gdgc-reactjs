import React from 'react'
import styled from 'styled-components'
import barcode from '../../assets/barcode.jpeg'


const BarcodeContainer=styled.div`
width:350px;
height:350px;
background-color:#fff;
border:10px solid #000;
border-radius:40px;
padding:30px;

@media screen and (max-width: 1200px) {
    width:200px;
    height:200px;
    margin-top:20px;
    border-radius:20px;
    border:5px solid #000;
    padding:0px;
    }


`

const BarcodeImg=styled.img`
height:100%;
width:100%;
border-radius:10px;
`

const Barcode = () => {
  return (
    <BarcodeContainer>
    <BarcodeImg src={barcode}/>
   </BarcodeContainer>
  )
}

export default Barcode