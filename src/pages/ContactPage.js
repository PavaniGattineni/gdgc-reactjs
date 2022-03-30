import React, { useState } from 'react'
import styled from 'styled-components'
import NavContainer from '../components/NavContainer/NavContainer'
import emailjs from 'emailjs-com'

import Footer from '../components/Footer/Footer'
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
position:relative;
`

const TitleContainer=styled.div`
margin-top:165px;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
position:relative;

@media screen and (max-width: 500px) {
margin-top:25px;
}
`


const ContactTitle=styled.h1`
font-size:75px;
font-weight:700px;
margin-bottom:10px;

@media screen and (max-width: 500px) {
  font-size:40px;
  }
`

const ContactDesc=styled.h4`
font-size:24px;
font-weight:600;
margin:0 200px;
margin-bottom:60px;

@media screen and (max-width: 500px) {
  font-size:14px;
  margin:0 20px;
  margin-bottom:20px;
  }
`
const ContactForm=styled.form`
width: 1171px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

@media screen and (max-width: 500px) {
 width:100%;
  }

  @media (min-width: 501px) and (max-width: 1300px){  
  width:50%;
    }
`


const Form1=styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
margin-bottom:10px;

@media screen and (max-width:1300px) {
 flex-direction:column;
 justify-content:center;
  }


`
const FormContainer=styled.div`
width:100%;
display:flex;
flex-direction:column;


@media screen and (max-width: 500px) {
padding:0 20px;
  }


`

const FormTitle=styled.p`
font-size:15px;
font-weight:700;
text-align:left;
padding-left:10px;

@media screen and (max-width: 1300px) {
  margin:10px 0;
  }
`

const Input=styled.input`
height:${props=>props.size === "large" ? "167px" : "70px"} ;
width:${props=>props.size === "large" ? "100%" : "362.31px"};
border-radius:10px;
margin-top:6px;
font-size:16px;
border:none;
margin-right:42px;
&:nth-last-child(){
  margin:0;
}


@media screen and (max-width: 500px) {
  width:100%;
  }

  @media (min-width: 501px) and (max-width: 1300px){  
    width:${props=>props.size === "large" ? "100%" : "100%"};

  }
`
const Form2=styled.div`
width:100%;
display:flex;
flex-direction:column;
margin-bottom:40px;

@media screen and (max-width: 500px) {
    padding:20px;
   }
`
const Submit=styled.button`
background-color:#000;
color:#fff;
font-size:30px;
font-weight:700;
border:none;
padding:10px 75px;
border-radius:10px;

&:hover{
    background-color:#444;
}

@media screen and (max-width: 500px) {
  font-size:24px;
  }
`



const Success = styled.div`
background-color: #62a762;
margin: 10px 0;
width:50%;
border-radius: 5px;
text-align:center;
margin-bottom:20px;


@media screen and (max-width: 500px) {
    width:90%;
    margin:10px;
    padding:10px;
    border-radius:10px;
    margin-bottom:20px;

    }
`
const Fail = styled.div`
  background-color: #f86060;
  width: 50%;
  margin: 10px 0;
  border-radius: 5px;
  text-align:center;


  @media screen and (max-width: 500px) {
    width:90%;
    margin:10px;
    padding:10px;
    border-radius:10px;
    margin-bottom:20px;
  
    }

`
const Info = styled.p`
color: #fff;
font-size: 14px;
padding: 5px;
`

const Link=styled.a`
text-decoration:none;
font-size:14px;
font-weight:700;
z-index:99;
color:#000;`

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
<<<<<<< HEAD
=======

>>>>>>> 1ff05b265de491990818c2251cdd92d44db20fbc
`


const ContactPage = () => {
   
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [contactNumber,setContactNumber]=useState('');
  const [message,setMessage]=useState('');

  const [emailSent, setEmailSent] = useState(false)
  const [error, setError] = useState(false)
  const [invalid, setInvalid] = useState(false)

  const dispatch=useDispatch()
  
  let data={name,email,contactNumber,message}


  const sendEmail = (e) => {
    e.preventDefault();
    if (e.target.email.value !== '' && e.target.name.value !== '' && e.target.contactnumber.value !== '') {
        emailjs.sendForm('service_vgh1cao', 'template_ty59tua', e.target,
            'd1yMbjx7hhKgbin29').then((result) => {
                console.log(result.text)
                setEmailSent(true)
                setTimeout(
                    () => {
                        setEmailSent(false)
                    },
                    3000
                )
            }, (error) => {
                setError(true)
                setTimeout(
                    () => {
                        setError(false)
                    },
                    3000
                )
            })
    } else {
        setInvalid(true)
        setTimeout(
            () => {
                setInvalid(false)
            },
            3000
        )
    }

    dispatch(SubmitForm(data))
}
  return (

    <Container>
      
      <NavContainer />

      <TitleContainer>
      <ContactTitle>Contact Us</ContactTitle>    
      <ContactDesc>
      The Luxury Asset Club is revolutionizing the ownership of select ultra-luxury assets
    For press or media inquiries, please email us directly at team@theluxuryassetclub.xyz
      </ContactDesc>
      <Link href='https://discord.gg/9BvBTyN2S7'>
        <DiscordButton2>Join Discord </DiscordButton2>
      </Link>
      </TitleContainer>

      <ContactForm onSubmit={sendEmail}> 
      <Form1>
        <FormContainer>
        <FormTitle>Full Name</FormTitle>
        <Input type='text'  onChange={(e)=>{setName(e.target.value)}} name="name"/>
        </FormContainer>  

        <FormContainer>
        <FormTitle>Email</FormTitle>
        <Input type='text' onChange={(e)=>{setEmail(e.target.value)}} name="email"/>
        </FormContainer>

        <FormContainer>
        <FormTitle>Phone No</FormTitle>
        <Input type='text' onChange={(e)=>{setContactNumber(e.target.value)}} name="contactnumber"/>
        </FormContainer>
      </Form1>
      <Form2>
        <FormTitle>Message</FormTitle>
         <Input type='text' size="large" onChange={(e)=>{setMessage(e.target.value)}} name="message"/>
      </Form2>
      {emailSent &&
                    <Success>
                        <Info className='info'>Your request has been sucessfully submitted</Info>
                    </Success>
                }
                {
                    invalid &&
                    <Fail>
                        <Info className='info'>Please enter all the details</Info>
                    </Fail>
                }
                {
                    error &&
                    <Fail>
                        <Info>Something went wrong. Please try again </Info>
                    </Fail>
                }
      <Submit type='submit'>Submit</Submit>
      </ContactForm>      

     <Footer />
      <SocialMedia />
    </Container>
  

  )
}

export default ContactPage