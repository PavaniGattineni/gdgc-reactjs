import React from 'react'
import emailjs from 'emailjs-com'
import styled from 'styled-components'
import logo from '../assets/logo.png'

import frame from '../assets/Frame.png'
import { useState } from 'react'
import Counter from '../components/Counter/Counter'
import SocialMedia from '../components/Socialmedia/SocialMedia'
import Barcode from '../components/Barcode/Barcode'
import Footer from '../components/Footer/Footer'




const Container = styled.div`
position:relative;
height: 100%;
width: 100%;
display:flex;
flex-direction:column;
align-items:center;
background: linear-gradient(90.13deg, #efe9ce 0.15%, #cfdbd9 99.93%);

`
const TitleContainer = styled.div`
display: flex;
align-items: center;
position: relative;
margin-bottom:50px;
flex-direction:column;
z-index:99;

`
const LogoContainer = styled.div`
height: 250px;
width: 250px;


@media screen and (max-width: 580px) {
      height:150px;
      width:150px;
    }
`
const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Link=styled.a`
link-decoration-style:none;
position: absolute;
top: 100px;
right: 120px;

@media screen and (max-width: 700px) {
display:none;
}
`
const DiscordButton = styled.button`
background-color: #000;
color: #fff;
width: 180px;
padding: 10px;
border: none;
border-radius: 10px;
font-size:18px;
font-weight: 700;
cursor:pointer;

&:hover{
    background-color:#444;
    color:#f6f6f6;
}
`
const HeaderContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    text-align: center;
    margin-bottom:50px;
    z-index:99;
    position:relative;

    @media screen and (max-width: 500px) {
        margin:0;
        }

`
const Title = styled.h1`
font-size: 75px;
font-weight:700;

@media screen and (max-width: 500px) {
font-size:40px;

@media (min-width: 501px) and (max-width: 1300px){
font-size:50px;
   }
}
`

const Subtitle = styled.p`
    font-size: 24px;
    font-weight: 600;

    @media screen and (max-width: 500px) {
        font-size:14px;
        }

    @media (min-width: 501px) and (max-width: 1300px){
        font-size:18px;
     }
`
const Link2=styled.a`
link-decoration-style:none;
display:none;

@media screen and (max-width: 700px) {
display:flex;
align-items:center;
margin:20px;
}

`
const DiscordButton2 = styled.button`
background-color: #000;
color: #fff;
width: 150px;
padding: 10px;
border: none;
border-radius: 10px;
font-size:14px;
font-weight: 700;
cursor:pointer;

&:hover{
    background-color:#444;
    color:#f6f6f6;
}
`
const Success = styled.div`
background-color: #62a762;
margin: 10px 0;
width:50%;
border-radius: 5px;
text-align:center;
@media screen and (max-width: 500px) {
    width:100%;
    margin:10px;
    }
`
const Fail = styled.div`
  background-color: #f86060;
  width: 50%;
  margin: 10px 0;
  border-radius: 5px;
  text-align:center;

  @media screen and (max-width: 500px) {
    width:100%;
    margin:10px;
    }

`
const Info = styled.p`
color: #fff;
font-size: 14px;
padding: 10px;

@media screen and (max-width: 500px) {
   font-size:12px;
   padding:5px;
    }
`


const Form = styled.form`
display:flex;
align-items:center;
flex-direction:column;
margin:60px 0;

@media screen and (max-width: 500px) {
   margin:30px;

    }
`

const Whitelist = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
z-index:99;

@media screen and (max-width: 580px) {
      flex-direction:column;
    }
  
@media screen and (max-width: 1200px) {
  flex-direction:column;
   }
`
const WhitelistTitle = styled.h1`
margin-right: 25px;
font-size:35px;
font-weight:700;

@media screen and (max-width: 500px) {
 font-size:24px;
   margin:10px 0;
    }
 
@media screen and (max-width: 1200px) {
margin:20px;
font-size:35px;
}
`

const Input = styled.input`
margin-right: 25px;
outline: none;
padding: 20px;
border: none;
background-color: #f3f3f3;
border-radius: 10px;
font-size: 15px;
font-weight: 700;

&::placeholder {
  color: #000;
}

@media screen and (max-width: 500px) {
 margin:10px 0; 
    }

 @media screen and (max-width: 1200px) {
margin:20px;
 }    
`

const Submit = styled.button`
color:#fff;
padding:20px 40px;
width:187px;
border:none;
border-radius:10px;
font-size:20px;
font-weight:700;
background-color:#000;

&:hover{
    background-color:#444;
    color:#f6f6f6;
}

@media screen and (max-width: 500px) {
  padding:10px 20px;
  font-size:14px;
  margin-top:10px;
    }

`


const Desc=styled.p`
font-size:12px;
font-weight:bold;
color:#000;
margin:10px 0;

@media screen and (max-width:900px){
margin-bottom:100px;
}
`



const FrameContainer=styled.div`
width:100%;
height:100vh;
position:absolute;
top:22%;
z-index:1;

@media screen and (max-width:500px){
    top:18%;
}
`

const Frame=styled.div`
width:100%;
height:100%;
mix-blend-mode: darken;
background:url(${frame}) top no-repeat;
z-index:1;

`

const UpdateRegisterPage = () => {


    const [emailSent, setEmailSent] = useState(false)
    const [error, setError] = useState(false)
    const [invalid, setInvalid] = useState(false)


 


    const sendEmail = (e) => {
        e.preventDefault();
        if (e.target.email.value !== '') {
            emailjs.sendForm('service_vgh1cao', 'template_uwhuqgl', e.target,
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


    }

    return (

        <Container>

            <TitleContainer>
                <LogoContainer>
                    <Logo src={logo} />
                </LogoContainer> 
            </TitleContainer>
                <Link href='https://discord.gg/9BvBTyN2S7'>
                <DiscordButton >Join Discord</DiscordButton>
                </Link>
            
            <HeaderContainer>
                <Title>Welcome to TLAC</Title>
                <Subtitle>CREATORS OF THE WORLD'S FIRST META-RAFFLE</Subtitle>
                <Link2 href='https://discord.gg/9BvBTyN2S7'>
                <DiscordButton2>
                    Join Discord
                </DiscordButton2>
                </Link2>
                
            </HeaderContainer>

            <Counter  />


            <Form onSubmit={sendEmail}>
                {emailSent &&
                    <Success>
                        <Info className='info'>Your requested has been sucessfully submitted</Info>
                    </Success>
                }
                {
                    invalid &&
                    <Fail>
                        <Info className='info'>Please enter the Email Address</Info>
                    </Fail>
                }
                {
                    error &&
                    <Fail>
                        <Info>Something went wrong. Please try again </Info>
                    </Fail>
                }
                <Whitelist>
                    <WhitelistTitle>Whitelist Mint</WhitelistTitle>
                    <Input className='input' type={"text"} placeholder="Email..." name='email' />
                    <Input className='input' type={"text"} placeholder="WalletAddress..." name="walletAdd" />
                    <Submit className='submit' type='submit'>Notify Me</Submit>
                </Whitelist>
            </Form>
            
            <Footer />
            
            <FrameContainer>
            <Frame/>
            </FrameContainer>

            <SocialMedia />
            
        </Container>



    )
}

export default UpdateRegisterPage

 
