import React from 'react'
import emailjs from 'emailjs-com'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import goldbrick from '../assets/Goldbrick.gif'
import Barcode from '../components/Barcode/Barcode'

import frame from '../assets/Frame.png'
import { useState } from 'react'
import Counter from '../components/Counter/Counter'
import SocialMedia from '../components/Socialmedia/SocialMedia'
import { MdClose } from 'react-icons/md';




const Container = styled.div`
position:relative;
width: 100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
background: linear-gradient(90.13deg, #efe9ce 0.15%, #cfdbd9 99.93%);
filter:${props=>props.popup ?'blur(10px)':''};
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
width:100%;
display:flex;
align-items:center;
flex-direction:column;
margin:60px;

@media screen and (max-width: 500px) {
   width:100%; 
   margin:20px;
    }
`

const Whitelist = styled.div`
width:100%;
display: flex;
align-items: center;
justify-content:center;
z-index:99;
padding:30px;


@media screen and (max-width: 1200px) {
  flex-direction:column;
  padding:10px;
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
 
@media (min-width:501px) and (max-width: 1200px) {
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
width:362px;

&::placeholder {
  color: #000;
}

@media screen and (max-width: 500px) {
 margin:10px 0; 
 width:300px;
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
  margin-bottom:20px;

    }

@media (min-width:501px) and (max-width: 1200px) {
margin-bottom:50px;
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

const BarcodeDesc=styled.p`
font-size:14px;
font-weight:600;
margin:10px;


@media screen and (max-width:500px){
font-size:12px;

}
`

const PopupContainer=styled.div`
position:absolute;
width:800px;
height:360px;
background-color:#f6f6f6;
z-index:999;
top:30%;
right:calc(50% - 400px);
border-radius:20px;
display:flex;
flex-direction:column;

@media screen and (max-width:500px){
   width:90%;
   left:0;
   margin:0 20px;
    }
`

const PopupTitle=styled.h4`
font-size:30px;
font-weight:700;

@media screen and (max-width:500px){
   font-size:24px;
     }
`

const PopupForm=styled.form`
display:flex;
flex-direction:column;
align-items:center;
position:relative;
padding-top:20px;

@media screen and (max-width:500px){
 
      }
`

const PopupInput=styled.input`
margin:20px;
border:none;
font-size:18px;
background-color: #EFEFEF;
color:#000;
padding:10px 5px;
border-radius:10px;

@media screen and (max-width:500px){
      width:320px;
      margin:20px 0px;
      }
`

const PopupSubmit=styled.button`
margin-top:10px;
padding:10px;
width:150px;
background-color:#000;
color:#fff;
border:none;
border-radius:10px;


:hover{
    background-color:#444;
}
`

const CloseButton=styled.button`
position:absolute;
top:5px;
right:5px;
background-color:#DC143C;
border:none;
padding:5px;
display:flex;
align-items:center;
justify-content:center;
border-radius:5px;

:hover{
    background-color:red;
    transform:scale(1.2);
}
`

const UpdateRegisterPage = () => {


    const [emailSent, setEmailSent] = useState(false)
    const [error, setError] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const [popup,setPopup]=useState(true)

 


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
                            closeModal();
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

    const closeModal=(e)=>{
        e.preventDefault();
        setPopup(false)
    }

    return (
<>
        <Container popup={popup}>

            <TitleContainer>
                <LogoContainer>
                    <Logo src={goldbrick} />
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

            <FrameContainer>
            <Frame/>
            </FrameContainer>
    
            <Barcode />
            <BarcodeDesc>TLAC 2022. All Rights Reserved</BarcodeDesc>
            <SocialMedia />
            
        </Container>

        {
            popup ?
            (
                <PopupContainer>
                <PopupForm onSubmit={sendEmail}>
                <PopupTitle>Whitelist User</PopupTitle>
                <PopupInput className='input' type={"text"} placeholder="Email..." name='email' />
                <PopupInput className='input' type={"text"} placeholder="WalletAddress..." name="walletAdd" />
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
                <PopupSubmit className='submit' type='submit'>Submit</PopupSubmit>
                <CloseButton onClick={closeModal}><MdClose color='white' size={'20px'}/></CloseButton>
                </PopupForm>
            </PopupContainer>
            )
            :
            ""

        }
        

            </>

          

    )
}

export default UpdateRegisterPage

 
