import React from 'react'
import styled from 'styled-components'
import barcode from '../../assets/barcode.jpeg'


const BarcodeContainer=styled.div`
width:250px;
height:250px;
border:10px solid #000;
border-radius:40px;

@media screen and (max-width: 500px) {
    width:150px;
    height:150px;
    margin-top:20px;
    border-radius:20px;
    border:5px solid #000;
    }

@media screen and (max-width: 1200px) {
    width:150px;
    height:150px;
    border-radius:20px;
    border:5px solid #000;
       }
`

const BarcodeImg=styled.img`
height:100%;
width:100%;
border-radius:20px;
object-fit:cover;
`

const Barcode = () => {
  return (
    <BarcodeContainer>
    <BarcodeImg src={barcode}/>
   </BarcodeContainer>
  )
}

export default Barcode