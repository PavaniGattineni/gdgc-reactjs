import React,{useEffect} from 'react'
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
import {useDispatch,useSelector} from 'react-redux';
import {fetchData} from '../redux/Actions/Data/data'
import {connect} from '../redux/Actions/blockchain/Blockchain'




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


const FrameContainer=styled.div`
width:100%;
height:100vh;
position:absolute;
top:22%;
z-index:1;

@media screen and (max-width:500px){
top:20%;
height:600px;
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

`

const PopupInput=styled.input`
margin:20px;
border:none;
font-size:18px;
background-color: #EFEFEF;
color:#000;
padding:10px 30px;
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

const PopupInfo=styled.div`
background-color:#434343;
display:flex;
align-items:center;
justify-content:center;
width:600px;
height:30px;
padding:10px;
margin-top:10px;
border-radius:6px;
color:#fff;
font-size:16px;
font-weight:600;


@media screen and (max-width:500px){
  width:95%;
  font-size:14px;

}
`

const UpdateRegisterPage = () => {


    const [emailSent, setEmailSent] = useState(false)
    const [error, setError] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const [popup,setPopup]=useState(true)
    const [list,setList]=useState();
    const [listed,setListed]=useState(false)
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');

    const [CONFIG, SET_CONFIG] = useState({
        CONTRACT_ADDRESS: "",
        SCAN_LINK: "",
        MAX_SUPPLY: 1,
        WEI_COST: 0,
        DISPLAY_COST: 0,
        GAS_LIMIT: 0,
      });


    const dispatch=useDispatch();
    const blockchain=useSelector((state)=>state.blockchain);
    const data=useSelector((state)=>state.data);
    

      

 
    const getConfig = async () => {
        const configResponse = await fetch("/config/config.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const config = await configResponse.json();
        SET_CONFIG(config);
      };

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
          dispatch(fetchData(blockchain.account));
        }
      };

      const connectWallet=()=>{
        if(blockchain.account === null){
          dispatch(connect())
        }
      }

  


      useEffect(()=>{
        getData();
      },[blockchain.account]);

      useEffect(()=>{
        getConfig();
       },[]);

      useEffect(()=>{
        connectWallet()
     },[])
      
     useEffect(()=>{
         setList(data.list)
     },[data])

      


   
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalGasLimit = String(gasLimit);
    
    

          


  

    const sendEmail = (e) => {
        e.preventDefault();
        if(blockchain.account === null){
            dispatch(connect());
        }else{
        
        if (e.target.email.value !== '' && e.target.walletAdd.value !== '') {
            const whitelisted=data.whitelisted;
            if(whitelisted){
               setListed(true)
               setEmail('')
               setAddress('')
               setTimeout(
                () => {
               setListed(false);
                },
                3000
            )
            }
            else{
            blockchain.smartContract.methods.whitelistUser(blockchain.account).send({
            gasLimit: String(totalGasLimit),
             to: CONFIG.CONTRACT_ADDRESS,
            from: blockchain.account,
            }).then(()=>{
           getData();
           emailjs.sendForm('service_vgh1cao', 'template_uwhuqgl', e.target,
           'd1yMbjx7hhKgbin29').then((result) => {
               setEmailSent(true)
               setEmail('')
               setAddress('')
               setTimeout(
                   () => {
                       setEmailSent(false)
                       closeModal();
                   },
                   3000
               )
           }, (error) => {
               setError(true)
               setEmail('')
               setAddress('')
               setTimeout(
                   () => {
                       setError(false)
                   },
                   3000
               )
           })
            })
           }
        } else{
            setInvalid(true)
            setEmail('')
            setAddress('')
            setTimeout(
                () => {
                    setInvalid(false)
                },
                3000
            )
        }

    }

    // blockchain.smartContract.methods.removeWhitelistUser(blockchain.account).send({from:blockchain.account})

}
    

    const closeModal=()=>{
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
                {
                    blockchain.account === null &&
                <PopupInfo>Please Connect your Wallet</PopupInfo>
                }
                <PopupInput className='input' type={"text"} placeholder="Email..." name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <PopupInput className='input' type={"text"} placeholder="WalletAddress..." name="walletAdd" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                {emailSent &&  !listed ?
                    <Success>
                        <Info className='info'>You are whitelisted successfully</Info>
                    </Success> 
                    :
                    ""
                }
                {
                    listed &&
                    <Fail>
                        <Info className='info' >You are already whitelisted</Info>
                    </Fail>
                }
                {
                    invalid &&
                    <Fail>
                        <Info className='info'>Please enter the crendentials</Info>
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

 
