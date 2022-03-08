import React from 'react'
import emailjs from 'emailjs-com'
import styled from 'styled-components'
//import logo from '../assets/logo.jpeg'
import Barcode from '../assets/barcode.jpeg'
import {FaInstagram} from '@react-icons/all-files/fa/FaInstagram'
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter'
import {FaTiktok} from 'react-icons/fa'
import {FaDiscord} from '@react-icons/all-files/fa/FaDiscord'
import {useState,useRef,useEffect} from 'react'



const OuterContainer=styled.div`

width:100%;
height:100%;
display:flex;
justify-content:center;
background-color: #EFE9CE;
`

const InnerContainer=styled.div`
width:44%;
display:flex;
flex-direction:column;
margin:20px;
text-align:center;

@media screen and (max-width: 450px) {
    width:100%;

     }

`

const DiscordContainer=styled.div`
width:100%;
display:flex;
justify-content:flex-end;
margin-right:40px;
`
const Link=styled.a`
link-style-decoration:none;
`

const DiscordButton=styled.button`
background-color:#000;
padding:10px 15px;
color:#fff;
border:none;
font-size:12px;
border-radius:5px;
font-weight:600;

&:hover{
    background-color: #202020;
    color:grey;
}
`

const DetailsContainer=styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;

flex-direction:column;
margin:10px;`

const LogoContainer=styled.div`
height:140px;
width:300px;
background-image:url(${require('../assets/logo.jpeg')});
background-position: center;
background-size:cover;
background-repeat: no-repeat;

@media screen and (max-width: 450px) {
    width:250px;
     }
`


const Desc=styled.p`
color: #000;
fontsize:14px;
margin:10px;

@media screen and (max-width: 450px) {
    font-size:12px;
     }
`

const FormContainer=styled.div`
border:2px solid #4c4c4c;
box-shadow: 2px 2px 7px #2c2c2c;
padding:20px;
border-radius:30px;
margin:10px 0;

@media screen and (max-width: 450px) {
   margin:20px;
    }
`

const Form=styled.form`
display:flex;
flex-direction:column;
align-items:center;
`
const FormTitle=styled.h2`
color:#1c1c1c;
text-align:center;
font-weight:bold;
`

const Input=styled.input`
margin:10px 0;
border:none;
padding:10px 5px;
font-size:18px;
color:#2c2c2c;
font-weight:600;
width:100%;
background-color:#fff   ;
border-radius:15px;

&::placeholder{
    color:#2c2c2c;
    font-size:14px;
    font-weight:600;
    padding:10px 5px;
}
&:focus{
    outline:none;
    
}
`

const Submit=styled.button`
width:200px;
background-color:#000;
font-weight:600;
color:#fff;
padding:15px;
font-size:18px;
border:none;
border-radius:20px;
cursor:pointer;
margin-top:10px;

&:hover{
    background-color: #202020;
    color:grey;
}
@media screen and (max-width: 450px) {
    width:80%;
    font-size:14px;
    padding:10px;
    border-radius:7px;
    }
`

const CountDown=styled.div`
margin-top:30px;
display:flex;
flex-direction:column;
align-items:center;
`

const Numbers=styled.div`
display:flex;
align-items:center;
font-size:20px;
margin:10px 0;

@media screen and (max-width: 450px) {
    font-size:14px;
    }
`

const Time=styled.div`
background-color:#000;
color:#fff;
display:flex;
justify-content:center;
align-items:center;
padding:10px;
border-radius:5px;
margin:0 15px;

@media screen and (max-width: 450px) {
     padding:6px;
    }
`

const Words=styled.h4`
word-spacing:10px;
font-size:15px;
@media screen and (max-width: 450px) {
    font-size:12px;
    }
`
const SocialContainer=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:40px;
`
const Info=styled.p`
color: #000;
font-weight:bold;
font-size:16px;

@media screen and (max-width: 450px) {
    font-size:12px;
     }
`

const SocialMedias=styled.div`
margin:20px 10px;
width:50%;
display:flex;
align-items:center;
justify-content:space-around;
`
const SocialMedia=styled.a`
cursor:pointer;
color:#000;
text-decoration-style:none;
font-size:40px;

@media screen and (max-width: 450px) {
    margin-right:10px;
    font-size:24px;
     }
`

const BarcodeImg=styled.img`
 width:140px;
 height:120px;
 margin-top:10px;

`


const  InputForm= () => {
  
    const [countdays,setCountDays]=useState('00');
    const [counthours,setCountHours]=useState('00');
    const [countminutes,setCountMinutes]=useState('00');
    const [countseconds,setCountSeconds]=useState('00');

    let interval=useRef()

    const startTimer=()=>{
        const countDate=new Date('April 15 , 2022 00:55:00').getTime()
        
        interval=setInterval(()=>{
         const now=new Date().getTime();
         const Distance=countDate -now;

         const days=Math.floor(Distance / (1000 * 60 * 60 *24));
         const hours=Math.floor(Distance % (1000 *60 *60 *24) / (1000 *60 *60));
         const minutes=Math.floor(Distance % (1000 *60 *60) / (1000 *60));
         const seconds=Math.floor(Distance % (1000 *60 ) / (1000));
           
         if(Distance <0){
             clearInterval(interval.current)
         }else{
             setCountDays(days.toLocaleString('en-US', { minimumIntegerDigits: 2}));
             setCountHours(hours.toLocaleString('en-US', { minimumIntegerDigits: 2}));
             setCountMinutes(minutes.toLocaleString('en-US', { minimumIntegerDigits: 2}));
             setCountSeconds(seconds.toLocaleString('en-US', { minimumIntegerDigits: 2}))
         }
        },1000);
    }

    useEffect(()=>{
        startTimer();
        return()=>{
            clearInterval(interval.current)
        }
    })


    const sendEmail=(e)=>{
     e.preventDefault();
     emailjs.sendForm('service_vgh1cao','template_awl04r7',e.target,
     'd1yMbjx7hhKgbin29').then((result)=>{
         console.log(result.text)
     },(error)=>{
         console.log(error.text)
     })
     console.log(e.target)
    }

  return (
    <OuterContainer>
        <InnerContainer>

         <DiscordContainer>
         <Link href='https://discord.gg/8jfZP5TW'>
         <DiscordButton >JOIN DISCORD</DiscordButton>   
         </Link>
         </DiscordContainer>
         <DetailsContainer>
             <LogoContainer />
             <Desc>
             WELCOME TO TLAC, CREATORS OF THE WORLD’S FIRST META-RAFFLE.
             </Desc>
        </DetailsContainer> 

        <Form onSubmit={sendEmail}>
        <FormContainer>
        <FormTitle>WHITELIST MINT</FormTitle>
        <Input type={"text"} placeholder="Email" name='email'/>
        <Input type={"text"} placeholder="Wallet Address" name="walletAdd"/>
        </FormContainer>
        <Submit type='submit'>NOTIFY ME</Submit>   
        {/* <Result></Result>   */}
        </Form>
        <CountDown>
           <Numbers>
               <Time>{countdays}</Time>  :
                <Time>{counthours}</Time> :
                <Time>{countminutes}</Time> :
                <Time>{countseconds}</Time>
               </Numbers>
           <Words>DAYS : HOURS : MINS : SEC</Words>
        </CountDown>
        <SocialContainer>
            <Info>FOLLOW US ON SOCIAL MEDIA FOR MORE UPDATES</Info>
            <SocialMedias >
              <SocialMedia  href={"https://instagram.com/luxuryassetclub?utm_medium=copy_link"} ><FaInstagram /></SocialMedia>
              <SocialMedia  href="https://twitter.com/luxuryassetclub?s=21"> <FaTwitter  /></SocialMedia>
              <SocialMedia  href="http://www.tiktok.com/@theluxuryassetclub"> <FaTiktok  /></SocialMedia>
              <SocialMedia  href="https://discord.gg/8jfZP5TW"><FaDiscord  /></SocialMedia>

            </SocialMedias>
        <BarcodeImg src={Barcode}/>
        </SocialContainer>
        </InnerContainer>

 </OuterContainer>
  )
}

export default InputForm