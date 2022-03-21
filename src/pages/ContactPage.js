import React, { useState } from 'react'
import styled from 'styled-components'
import NavContainer from '../components/NavContainer/NavContainer'


import Barcode from '../components/Barcode/Barcode'
import SocialMedia from '../components/Socialmedia/SocialMedia'
import { useDispatch } from 'react-redux'
import SubmitForm from '../redux/Actions/Contacts/Submit'


const Container=styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background: linear-gradient(90.13deg, #efe9ce 0.15%, #cfdbd9 99.93%);
text-align:center;
`

const TitleContainer=styled.div`
margin-top:165px;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
position:relative;
`


const ContactTitle=styled.h1`
font-size:75px;
font-weight:700px;
margin-bottom:10px;
`

const ContactDesc=styled.h4`
font-size:24px;
font-weight:600;
margin-bottom:60px;
`
const ContactForm=styled.form`
width: 1171px;
display:flex;
flex-direction:column;
align-items:center;

`


const Form1=styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
`
const FormContainer=styled.div`
display:flex;
flex-direction:column;
`

const FormTitle=styled.p`
font-size:15px;
font-weight:700;
text-align:left
`

const Input=styled.input`
height:${props=>props.size === "large" ? "167px" : "70px"} ;
width:${props=>props.size === "large" ? "100%" : "362.31px"};
border-radius:10px;
margin-top:6px;
border:none;

`
const Form2=styled.div`
width:100%;
display:flex;
flex-direction:column;
margin-bottom:40px;
`
const Submit=styled.button`
background-color:#000;
color:#fff;
font-size:30px;
font-weight:700;
border:none;
padding:10px 75px;
border-radius:10px;
margin-bottom:115px;

&:hover{
    background-color:#444;
}
`

const BarcodeDesc=styled.p`
font-size:14px;
font-weight:600;
margin:10px;
`

const ContactPage = () => {
   
  const [fullName,setFullName]=useState('');
  const [email,setEmail]=useState('');
  const [contactNumber,setContactNumber]=useState('');
  const [message,setMessage]=useState('');

  const dispatch=useDispatch()

  const SubmitContactForm=(e)=>{
    e.preventDefault();
    dispatch(SubmitForm(fullName,email,contactNumber,message))
    console.log(fullName,email)
  }

  return (
    <Container>
      
      <NavContainer />

      <TitleContainer>
      <ContactTitle>Contact Us</ContactTitle>    
      <ContactDesc>
      The Luxury Asset Club is an exclusive online community of owners looking to revolutionize the <br /> ownership of rare exclusive collectibles.
      </ContactDesc>
      <SocialMedia />
      </TitleContainer>

      <ContactForm>
      <Form1>
        <FormContainer>
        <FormTitle>Full Name</FormTitle>
        <Input  onChange={(e)=>{setFullName(e.target.value)}}/>
        </FormContainer>  

        <FormContainer>
        <FormTitle>Email</FormTitle>
        <Input onChange={(e)=>{setEmail(e.target.value)}}/>
        </FormContainer>

        <FormContainer>
        <FormTitle>Phone No</FormTitle>
        <Input onChange={(e)=>{setContactNumber(e.target.value)}}/>
        </FormContainer>
      </Form1>
      <Form2>
        <FormTitle>Message</FormTitle>
         <Input size="large" onChange={(e)=>{setMessage(e.target.value)}}/>
      </Form2>
      <Submit type='submit' onClick={SubmitContactForm}>Submit</Submit>
      </ContactForm>      

       <Barcode />
      <BarcodeDesc>TLAC 2022. All Rights Reserved</BarcodeDesc>
         
    </Container>
  )
}

export default ContactPage