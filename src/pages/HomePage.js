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
import { MdClose } from 'react-icons/md';
import Submit from '../redux/Actions/Form/form'




import SuperWorld from '../assets/Superworld LOGO.png'
import Enforceable from '../assets/EnforceableNFT LOGO.png'
import Makeawish from '../assets/Make-A-Wish Logo.png'
import woodlawn from '../assets/Woodlawn Media Logo.PNG'


import ReactPlayer from 'react-player'
import { useDispatch ,useSelector} from 'react-redux';
import { fetchData } from '../redux/Actions/Data/data';
import { connect } from '../redux/Actions/blockchain/Blockchain';



const Container=styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
background: linear-gradient(90.13deg, #efe9ce 0.15%, #cfdbd9 99.93%);
position:relative;
filter:${props=>props.popup ?'blur(10px)':''};
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
margin-bottom:20px;


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
margin-top:40px;

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


const HomePage = () => {
   const dispatch=useDispatch();
   const blockchain=useSelector((state)=>state.blockchain);
   const data=useSelector((state)=>state.data);
   const [claimingNft, setClaimingNft] = useState(false);
   const [feedback, setFeedback] = useState(``);
   const [sold,setSold]=useState(false)

   const [emailSent, setEmailSent] = useState(false)
   const [error, setError] = useState(false)
   const [invalid, setInvalid] = useState(false)
   const [popup,setPopup]=useState(false);
   const [list,setList]=useState();
   const [listed,setListed]=useState(false)
   const [email,setEmail]=useState('');
   const [walletAddress,setwalletAddress]=useState('');
   const [info,setInfo]=useState(false);
   const [loading,setLoading]=useState(false)



   const whitelisted=data.whitelisted;
   const presale=data.presale;
   const owner=data.owner;
   const winners=data.winners;
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
      if(soldout === 0 &&  !sold && winners.length === 0){
        setSold(true);
        FetchWinners();
      }       
      setInfo(true)
      setPopup(true)
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
      .mint()
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


  let formdata={email,walletAddress}

 const closeModal=()=>{
  setPopup(false)
}

  const sendEmail = (e) => {
      e.preventDefault();
      let cost = CONFIG.WEI_COST;
      let gasLimit = CONFIG.GAS_LIMIT;
      let totalCostWei = String(cost);
      let totalGasLimit = String(gasLimit);
      if(blockchain.account === null){
          dispatch(connect());
      }else{
      
      if (e.target.email.value !== '' && e.target.walletAdd.value !== '') {
          const whitelisted=data.whitelisted;
          if(whitelisted && data){
             setListed(true)
             setEmail('')
             setwalletAddress('')
             setTimeout(
              () => {
             setListed(false);
              },
              3000
          )

          }
          else{
          setLoading(true)
          blockchain.smartContract.methods.whitelistUser().send({
          gasLimit: String(totalGasLimit),
           to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          }).then(()=>{
          getData();
          dispatch(Submit(formdata)).then((result) => {
              setEmailSent(true)
              setEmail('')
              setwalletAddress('')
              setLoading(false)
              setTimeout(
                  () => {
                      setEmailSent(false)
                      closeModal();
                  },
                  5000
              )
          }, (error) => {
           setError(true)
           setEmail('')
           setwalletAddress('')
           setTimeout(
               () => {
                   setError(false)
               },
               3000
           )
    })
          }
         )
  }

} else{
          setInvalid(true)
          setEmail('')
          setwalletAddress('')
          setTimeout(
              () => {
                  setInvalid(false)
              },
              3000
          )
      }
  }


}

 const FetchWinners=()=>{
  let gasLimit = CONFIG.GAS_LIMIT;
  let totalGasLimit = String(gasLimit);
  blockchain.smartContract.methods.fetchWinners().send({
    gasLimit: String(totalGasLimit),
    to: CONFIG.CONTRACT_ADDRESS,
   from: blockchain.account
  })
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

  const connectWallet=()=>{
    if(blockchain.account === null){
      dispatch(connect())
    }
  }
  
 useEffect(()=>{
     setList(list)
 },[list])


 



  return (
    <>
    <Container popup={popup}>
   
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
            <WinnersTitle>
               NFT Tickets left - {soldout}
              </WinnersTitle>
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
         soldout != 0 && !owner ?
         
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
              liquidate extremely collectible physical assets. It starts with the private mint of the Luxury Asset Club's blue-chip offering 18K Rose Gold Kobe Bryant signed Hublot watch.There will be
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
            <ReactPlayer height={'100%'} width={'100%'}  url={"https://www.youtube.com/watch?v=qOPGT1af7l0&t=11s"} />
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
          {
            popup && info ?
            (
                <PopupContainer>
                <PopupForm onSubmit={sendEmail}>
                <PopupTitle>Whitelist User</PopupTitle>
                {
                    blockchain.account === null &&
                <PopupInfo>Please Connect your Wallet</PopupInfo>
                }
                <PopupInput className='input' type={"email"} placeholder="Email..." name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <PopupInput className='input' type={"text"} placeholder="WalletAddress..." name="walletAdd" value={blockchain.account} onChange={(e)=>setwalletAddress(e.target.value)}/>
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
  
                  
             
                <PopupSubmit className='submit' type='submit'>{loading ? <TailSpin/> : "Submit"}</PopupSubmit>
        
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

export default HomePage