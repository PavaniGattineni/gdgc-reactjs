import React, { useEffect,  useState } from 'react'
import styled from 'styled-components'
import Counter from '../components/Counter/Counter'
import RoadMap from '../components/RoadMap/RoadMap'
import frame from '../assets/Frame.png';
import Mask from '../assets/Mask.png'
import NavContainer from '../components/NavContainer/NavContainer'
import SocialMedia from '../components/Socialmedia/SocialMedia'
import Footer from '../components/Footer/Footer';
import {TailSpin} from 'react-loading-icons'


import SuperWorld from '../assets/Superworld LOGO.png'
import Enforceable from '../assets/EnforceableNFT LOGO.png'
import Makeawish from '../assets/Make-A-Wish Logo.png'
import woodlawn from '../assets/Woodlawn Media Logo.PNG'



import video1 from '../assets/Kobe.MOV'
import video2 from '../assets/Makeawish.MOV'
import video3 from '../assets/Pressvideo.mp4'
import ReactPlayer from 'react-player'
import { useDispatch ,useSelector} from 'react-redux';
import { fetchData } from '../redux/Actions/Data/data';
import { connect } from '../redux/Actions/blockchain/Blockchain';
import { winner } from 'synonyms/dictionary';


const Container=styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
background: linear-gradient(90.13deg, #efe9ce 0.15%, #cfdbd9 99.93%);
position:relative;
`

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
`


const TitleContainer=styled.div`
width:100%;
text-align:center;
margin-top:165px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;

@media screen and (max-width:500px){
  width:100%;
  margin-top:25px;
  }
`
const Title=styled.h1`
font-size:75px;
font-weight:700;
margin:12px 0;

@media screen and (max-width: 500px) {
font-size:40px;
}
`
const Desc=styled.h4`
font-size:24px;
font-weight:600;
@media screen and (max-width: 500px) {
  font-size:18px;
  padding:0 25px;
  }
`
const MintContainer=styled.div`
width:252px;
border:1px solid #000;
margin-top:35px;
padding:10px;
border-radius:14px;
margin-bottom:120px;
z-index:99;

:hover{
  background-color:#444;
}

@media screen and (max-width: 500px) {
  width:130px;
  height:60px;
  margin-bottom:50px;
  }
`

const MintButton=styled.button`
font-size:38px;
font-weight:700;
padding:6px 72px;
border:none;
background-color:#000;
color:#fff;
border-radius:8px;
cursor:pointer;
z-index:99;



@media screen and (max-width: 500px) {
  padding:10px 35px;
  height:40px;
  font-size:14px;
  }
`

const Result=styled.div`
background-color:#434343;
display:flex;
align-items:center;
justify-content:center;
width:800px;
height:50px;
padding:10px;
margin-top:50px;
border-radius:15px;
color:#fff;
font-size:18px;
font-weight:600;


@media screen and (max-width:500px){
  width:95%;
  font-size:14px;

}
`

const RoadMapContainer=styled.div`
width:1052px;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
margin-top:20px;

@media screen and (max-width: 500px) {
width:100%;

}

`
const RoadmapTitle=styled.h1`
font-size:45px;
font-weight:700;

@media screen and (max-width: 500px) {
  font-size:30px;
  }
`

const RoadmapSubTitle=styled.h4`
margin-bottom:40px;
font-size:18px;
font-weight:600;
color:rgba(0, 0, 0, 0.6);
margin-bottom:60px;

@media screen and (max-width: 500px) {
  font-size:14px;
  margin-bottom:90px;
  }
`

const CountDownContainer=styled.div`
margin-top:97px;
width:100%;
display:flex;
align-items:center;
flex-direction:column;

@media screen and (max-width: 500px) {
  margin-top:30px;
  }
`

const CountTitle=styled.h1`
font-size:45px;
font-weight:700;
margin-bottom:10px;
text-align:center;

@media screen and (max-width: 500px) {
  font-size:24px;
  margin:0;
  }
`
const AboutContainer=styled.div`
width:1290px;
height:100%;
display:flex;
align-items:center;
flex-direction:column;

@media screen and (max-width: 500px) {
  width:100%;
  }
`
const Group=styled.div`
height:640px;
width:100%;
display:flex;
align-items:center;
justify-content:center;

@media screen and (max-width: 1300px) {
  flex-direction:column;
   height:100%;

   &:nth-child(2){
     flex-direction:column-reverse;
   }
  }
`

const GroupInfo=styled.div`
width:100%;
flex:1;
margin-right:${props=>props.right === 'true' ? '28px' : ''};
margin-left:${props=>props.right !== 'true' ? '28px' : ''};
z-index:99;

@media screen and (max-width: 500px) {
  margin:20px 0;
  }
  @media (min-width: 501px) and (max-width: 1300px){  
    margin:10px;
    }

`

const GroupTitle=styled.h1`
font-size:45px;
font-weight:700;
margin-bottom:15px;
z-index:99;
text-align:center;

@media screen and (max-width: 500px) {
  font-size:24px;
  padding:0 10px;
  }

 
`

const GroupDesc=styled.p`
font-size:16px;
font-weight:600;
z-index:99;

@media screen and (max-width: 500px) {
  font-size:14px;
  padding:0 20px;
  }

  @media (min-width: 501px) and (max-width: 1300px){  
    margin:0px 200px;
    }
`


const GroupVideo=styled.div`
width:640px;
height:486px;
border-radius:30px;
z-index:99;
display:flex;
align-items:center;
justify-content:center;
position:relative;



@media screen and (max-width: 1300px) {
  width:340px;
  height:250px;
  }
`
const Video=styled.div`
width:${props=>props.potrait==="true"? "250px" : "100%"};
height:100%;
border-radius:${props=>props.potrait==="true"? "20px" : "30px"};
display:flex;
align-items:center;
justify-content:center;
`

const PartnerShipContainer=styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-bottom:100px;
position:relative; 


@media screen and (max-width: 500px) {
margin:20px;  
  } 

  @media (min-width: 501px) and (max-width: 1300px){  
    margin-bottom:50px;
    }
  
`

const PartnerShipTitle=styled.h1`
font-size:45px;
font-weight:700;
margin-bottom:54px;
z-index:99;

@media screen and (max-width: 500px) {
font-size:24px; 
margin:20px 0;
  }

  @media (min-width: 501px) and (max-width: 1300px){  
    margin-bottom:20px;
    }
`

const Partners=styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
z-index:99;

@media screen and (max-width: 1300px) {
  width:100%;
  flex-direction:column;  
  }

`


const PartnerImg=styled.img`
width:273px;
height:104px;
margin-right:67px;
object-fit:contain;

&:nth-child(4){
  margin:0px;
}
@media screen and (max-width: 1300px) {
  margin:10px 0;  

  &:nth-child(4){
    margin:10px;
  }
}
`

const MaskContainer=styled.div`
position:absolute;
width: 100%;
height: 663px;
background:url(${Mask}) center no-repeat;
top:-150px;
`


const FrameContainer=styled.div`
width:100%;
height:100vh;
position:absolute;
top:6%;
`

const Frame=styled.div`
width:100%;
height:100%;
mix-blend-mode: darken;
background:url(${frame}) top no-repeat;
z-index:-99;
`
const Link=styled.a`

text-decoration:none;
font-size:14px;
font-weight:700;
z-index:99;
color:#000;`


const OwnerContainer=styled.div`
margin-top:25px;
display:flex;
align-items:center;
flex-direction:column;
z-index:999;
`

const ButtonContainer=styled.div`
z-index:999;
display:flex;
align-items:center;

@media screen and (max-width: 500px) {
  flex-direction:column;
    }
`

const Button=styled.button`
padding:10px 20px;
width:200px;
border:none;
background-color:#434343;
margin:0 20px;
color:#fff;
border-radius:15px;
font-size:18px;
font-weight:600;
z-index:99;

:hover{
  background-color:#000;
  cursor:pointer;
}
`


const WinnersTitle=styled.h1`
font-weight:700;
font-size:40px;

`

const WinnerList=styled.div`
width:600px;
height:200px;
margin-top:30px;
background-color:#434343;
display:flex;
flex-direction:column;
align-itemms:center;
justify-content:center;
border-radius:10px;
`
const Winner=styled.p`
color:#fff;
font-size:18px;
font-weight:600;
margin:10px;
`


const HomePage = () => {
   const dispatch=useDispatch();
   const blockchain=useSelector((state)=>state.blockchain);
   const data=useSelector((state)=>state.data);
   const [claimingNft, setClaimingNft] = useState(false);
   const [feedback, setFeedback] = useState(``);



   const whitelisted=data.whitelisted;
   const presale=data.presale;
   const owner=data.owner;
   const winners=data.winners;
   const totalsupply=data.totalSupply;
   const soldout=data.soldout;


    

   const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0
  });

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account))
     }
  };

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

  const mintNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost);
    let totalGasLimit = String(gasLimit);

    setClaimingNft(true);
    blockchain.smartContract.methods
      .transfer()
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
        setTimeout(()=>{
          setFeedback('')
        },3000)
      })
      .then(() => {
  
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        setTimeout(()=>{
          setFeedback('')
        },3000)
        dispatch(fetchData(blockchain.account));
      });
  };

 const connectWallet=()=>{
   if(blockchain.account === null){
     dispatch(connect())
   }
 }

 const publicsale=()=>{
  let gasLimit = CONFIG.GAS_LIMIT;
  let totalGasLimit = String(gasLimit);
   blockchain.smartContract.methods.setPublicMint().send({ gasLimit: String(totalGasLimit),
    to: CONFIG.CONTRACT_ADDRESS,
   from: blockchain.account})
 }


 const PickWinner=()=>{
  let gasLimit = CONFIG.GAS_LIMIT;
  let totalGasLimit = String(gasLimit);
  blockchain.smartContract.methods.pickWinner().send({
    gasLimit: String(totalGasLimit),
    to: CONFIG.CONTRACT_ADDRESS,
   from: blockchain.account
  })
 }

 const Reveal=()=>{
  let gasLimit = CONFIG.GAS_LIMIT;
  let totalGasLimit = String(gasLimit);
  blockchain.smartContract.methods.reveal().send({
    gasLimit: String(totalGasLimit),
    to: CONFIG.CONTRACT_ADDRESS,
   from: blockchain.account})
 }


  useEffect(()=>{
    getData()
  },[blockchain.account]);

  useEffect(()=>{
   getConfig();
  },[]);

  useEffect(()=>{
     connectWallet()
  },[])
 
  const callFunct = () => { 
   setTimeout(() => {
     Reveal(); 

  }, 10000); 
}; 

  


  return (
    <Container>

       <NavContainer />

        <TitleContainer>
          <Title>TLAC</Title>
          <Desc>TLAC is an exclusive online community of owners looking to revolutionize the <br/> ownership of rare exclusive collectibles.</Desc>
          {
             feedback.length > 0 &&
               <Result>{feedback}</Result>
           }
           {
          presale &&  !whitelisted && !owner ?    
               <Result>You're not whitelisted for Presale Mint</Result> : '' 
           }
                   {
           owner &&
           <OwnerContainer>
         
         {
             Number(soldout) !=0
          ? (
              <>
                <WinnersTitle>Minted</WinnersTitle>
                <WinnersTitle>
                  {totalsupply}/{CONFIG.MAX_SUPPLY}
                </WinnersTitle>
                {
                  presale &&
                <Button onClick={publicsale}>Public sale</Button>
                }
              </>
            ) : (
             <div>
               {
                 winners.length < 3 &&
                 PickWinner()
               }
               {
                 winners.length < 3 &&
                  callFunct()
               }
             </div>
            )}
             <WinnerList>
                {
                  winners.length === 0 ?
                  <Winner>Yet to be Announced</Winner> 
                  :
                  winners.map((winner,idx)=>(
                    <Winner key={idx}>{winner}</Winner>
                  ))
                }
             </WinnerList>
             
           </OwnerContainer>
         }
         {
         soldout != 0 && !owner?
         
          <MintContainer>
            {
              (blockchain.account === '' || blockchain.smartContract === null) ?
              <MintButton onClick={(e)=>{
                e.preventDefault();
                dispatch(connect());
                getData();

              }}>
                Mint
              </MintButton>
              :         
          <MintButton  
           claimingNft={claimingNft}
            disabled={claimingNft ? 1 : 0}
  
              onClick={(e) => {
              e.preventDefault();
              mintNFTs();
              getData();
             }}>{claimingNft ? <TailSpin /> : "Mint"}</MintButton>
             
            }
          </MintContainer>
          :
          !owner ?
            <Result>Nfts are sold out</Result>
            :
            ""

         }
        </TitleContainer>
        <Link href='https://discord.gg/9BvBTyN2S7'>
        <DiscordButton2>Join Discord </DiscordButton2>
        </Link>
      
      <RoadMapContainer>
        <RoadmapTitle>#TLAC ROADMAP</RoadmapTitle>
        <RoadmapSubTitle>The Creators Of The Meta-Raffle</RoadmapSubTitle>
         <RoadMap />
      </RoadMapContainer>
      
      <CountDownContainer>
        <CountTitle>WHITELIST COUNTDOWN</CountTitle>
        <Counter />
      </CountDownContainer>

      <AboutContainer>
        <Group>
          <GroupInfo right="true">
              <GroupTitle>
              TLAC
              </GroupTitle>
              <GroupDesc>
              The Luxury Asset Club is an exclusive online community of owners pushing the digital
              collectible world into new territory. TLAC uses group economics & the community model to help
              liquidate extremely collectible physical assets. It starts with the private mint of the Luxury Asset
              Club's blue-chip offering on 4/13/2022, the anniversary of Kobe’s final NBA game. There will be
              3 randomly generated winning tickets, and each NFT will be a digital replica of the 18K Rose
              Gold Kobe Bryant signed Hublot (DYOR) delivered as 8,024 digital twins. The physical watch, of
              which there are only three in the world and holds an estimated value of $3,000,000. Upon
              sellout, one club member will win the watch.
              <br />
              <br />

              As our community develops, TLAC will forever change the process in which ultra-luxury assets
              are sold and held. The Luxury Asset Club will be stored and minted on the Polygon Network.
              </GroupDesc>
          </GroupInfo>
          <GroupVideo >
            <Video>
            <ReactPlayer height={'100%'} width={'100%'}  url={"https://youtu.be/3dh1js1JcZ0"} />
            </Video>
   
          </GroupVideo>
        </Group>

        <Group>
          <GroupVideo >
            <Video potrait="true">
            <ReactPlayer height={'100%'} width={'100%'}  url={"https://www.youtube.com/watch?v=QGUbXKqJw58"} />

            </Video>
          </GroupVideo>
          <GroupInfo right="false">
           <GroupTitle>Philanthropy</GroupTitle>
           <GroupDesc>
           It is our obligation as an NFT project to use web3 technology to help the less fortunate. Our
          business model allows us to bridge innovation with impact. Every raffle we run will be partnered
          with a charity the community chooses. Charitable donations will be made from the proceeds of
          each raffle. We believe that doing so will help different charitable organizations with their current
          objectives while serving them a revolutionary platform with innovative methods for fundraising.
          For The Luxury Asset Club’s first meta-raffle, a percentage of proceeds have been arranged to
          be donated to the Make-A-Wish foundation, Greater LA Chapter.
           </GroupDesc>
          </GroupInfo>
        </Group>

        <Group>
        
          <GroupInfo right="true">
            <GroupTitle>In The Press</GroupTitle>
              <GroupDesc>
                Over the last nine months of putting together this project, we have been fortunate enough to be
              featured in over 200 publications around the globe and seen in Times Square..Twice!
            </GroupDesc>
          </GroupInfo>
          <GroupVideo >
            <Video potrait="true">
            <ReactPlayer height={'100%'} width={'100%'}  url={"https://www.youtube.com/watch?v=ToJPfixYY4Q"} />    
            </Video>
          </GroupVideo>
        </Group>  
        
        <PartnerShipContainer>
          <PartnerShipTitle>PARTNERSHIPS</PartnerShipTitle>
          <Partners>
           
            <PartnerImg src={SuperWorld}/>
            <PartnerImg src={Makeawish}/>
            <PartnerImg src={Enforceable} cover="true"/>
            <PartnerImg src={woodlawn}/>
          </Partners>
         <MaskContainer></MaskContainer>
        </PartnerShipContainer>

      </AboutContainer>
      <Footer />

      <FrameContainer>
        <Frame />
      </FrameContainer>


      <SocialMedia size="large"/>
    </Container>
  )
}

export default HomePage