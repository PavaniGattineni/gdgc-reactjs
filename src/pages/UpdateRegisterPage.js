import React from 'react'
import emailjs from 'emailjs-com'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import opensea from '../assets/image 8.png'
import Barcode from '../assets/barcode.jpeg'
import frame from '../assets/Frame.png'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaTiktok } from 'react-icons/fa'
import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord'
import { useState, useRef, useEffect } from 'react'
import Counter from '../components/Counter'




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

@media screen and (max-width: 500px) {
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

    @media screen and (max-width: 500px) {
        margin:0;
        }

`
const Title = styled.h1`
font-size: 75px;
font-weight:700;
@media screen and (max-width: 500px) {
font-size:40px;
}
`

const Subtitle = styled.p`
    font-size: 24px;
    font-weight: 600;

    @media screen and (max-width: 500px) {
        font-size:14px;
        }
`
const Link2=styled.a`
link-decoration-style:none;
display:none;

@media screen and (max-width: 500px) {
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
font-size: 12px;
padding: 5px;
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

   
`
const WhitelistTitle = styled.h1`
margin-right: 25px;
font-size:35px;
font-weight:700;

@media screen and (max-width: 500px) {
 font-size:24px;
   margin:10px 0;
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

const BarcodeContainer=styled.div`
width:350px;
height:350px;
border:10px solid #000;
border-radius:40px;

@media screen and (max-width: 500px) {
    width:150px;
    height:150px;
    margin-top:20px;
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
const Desc=styled.p`
font-size:12px;
font-weight:bold;
color:#000;
margin:10px 0;
`

const SocialMedias=styled.div`
position:absolute;
right:0;
top:30%;
background-color:#000;
padding:10px;
display:flex;
flex-direction:column;
align-items:center;
border-radius:10px 0 0 10px; 

@media screen and (max-width: 500px) {
   position:relative;
   flex-direction:row;
   width:100%;
   display:flex;
   align-items:center;
   justify-content:space-between;
    }
`
const Box=styled.div`
width:45px;
height:45px;
margin:10px;
background-color:#fff;
border-radius:6px;
display:flex;
justify-content:center;

@media screen and (max-width: 500px) {
    width:35px;
    height:35px;
    }
`


const SocialMedia=styled.a`
color:#000;
font-size:28px;
display:flex;
align-items:center;
justify-content:center;
`

const SocialMediaImg=styled.img`
height:100%;
width:100%;
padding:3px;
cursor:pointer;
`
const Open=styled.a`
link-decoration-style:none;
`

const FrameContainer=styled.div`
width:100%;
height:100vh;
position:absolute;
top:22%;
`

const Frame=styled.div`
width:100%;
height:100%;
mix-blend-mode: darken;
background:url(${frame}) top no-repeat;
z-index:-99;

`

const InputForm = () => {

    const [countdays, setCountDays] = useState('00');
    const [counthours, setCountHours] = useState('00');
    const [countminutes, setCountMinutes] = useState('00');
    const [countseconds, setCountSeconds] = useState('00');
    const [emailSent, setEmailSent] = useState(false)
    const [error, setError] = useState(false)
    const [invalid, setInvalid] = useState(false)


    let interval = useRef()

    const startTimer = () => {
        const countDate = new Date('April 15 , 2022 00:55:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime();
            const Distance = countDate - now;

            const days = Math.floor(Distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(Distance % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(Distance % (1000 * 60) / (1000));

            if (Distance < 0) {
                clearInterval(interval.current)
            } else {
                setCountDays(days.toLocaleString('en-US', { minimumIntegerDigits: 2 }));
                setCountHours(hours.toLocaleString('en-US', { minimumIntegerDigits: 2 }));
                setCountMinutes(minutes.toLocaleString('en-US', { minimumIntegerDigits: 2 }));
                setCountSeconds(seconds.toLocaleString('en-US', { minimumIntegerDigits: 2 }))
            }
        }, 1000);
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })


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
                <Link2>
                <DiscordButton2>
                    Join Discord
                </DiscordButton2>
                </Link2>

            </HeaderContainer>

            <Counter countdays={countdays} counthours={counthours} countminutes={countminutes} countseconds={countseconds} />


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
            

            <BarcodeContainer>
               <BarcodeImg src={Barcode}/>
            </BarcodeContainer>
            <Desc>TLAC 2022 All rights reserved</Desc> 
            
            <FrameContainer>
            <Frame/>
            </FrameContainer>
    

            <SocialMedias >
              <Box>
              <SocialMedia  href={"https://instagram.com/luxuryassetclub?utm_medium=copy_link"} ><FaInstagram /></SocialMedia>
              </Box>
              <Box>
              <SocialMedia  href="https://twitter.com/luxuryassetclub?s=21"> <FaTwitter  /></SocialMedia>
                  </Box>
              <Box>
              <SocialMedia  href="http://www.tiktok.com/@theluxuryassetclub"> <FaTiktok  /></SocialMedia>
               </Box>
               <Box>   
              <SocialMedia  href="https://discord.gg/9BvBTyN2S7"><FaDiscord  /></SocialMedia>
            </Box>
            <Box>
                <Open>
                <SocialMediaImg src={opensea}/>
                </Open>
             </Box>
            </SocialMedias> 

        </Container>



    )
}

export default InputForm

 
