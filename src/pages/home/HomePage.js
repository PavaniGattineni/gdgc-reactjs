import React, { useEffect,  useState } from 'react'
import styled from 'styled-components'
import Counter from '../../components/Counter/Counter'
import RoadMap from '../../components/RoadMap/RoadMap'
import frame from '../../assets/Frame.png';
import Mask from '../../assets/Mask.png'
import NavContainer from '../../components/NavContainer/NavContainer'
import SocialMedia from '../../components/Socialmedia/SocialMedia'
import Footer from '../../components/Footer/Footer';
import {TailSpin} from 'react-loading-icons'
import { MdClose } from 'react-icons/md';
import Submit from '../../redux/Actions/Form/form'
import './HomePage.scss'




import SuperWorld from '../../assets/Superworld LOGO.png'
import Enforceable from '../../assets/EnforceableNFT LOGO.png'
import Makeawish from '../../assets/Make-A-Wish Logo.png'
import woodlawn from '../../assets/Woodlawn Media Logo.PNG'


import ReactPlayer from 'react-player'
import { useDispatch ,useSelector} from 'react-redux';
import { fetchData } from '../../redux/Actions/Data/data';
import { connect } from '../../redux/Actions/blockchain/Blockchain';




const MaskContainer=styled.div`
position:absolute;
width: 100%;
height: 663px;
background:url(${Mask}) center no-repeat;
top:-150px;
`



const Frame=styled.div`
width:100%;
height:100%;
mix-blend-mode: darken;
background:url(${frame}) top no-repeat;
z-index:-99;
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

   //styling
   const [right,setRight]=useState(true)
   const [potrait,setPotrait]=useState(true)



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
      dispatch(fetchData(blockchain.account)).then(()=>{
        if(soldout === 0 &&  !sold && winners.length === 0){
          setSold(true);
          FetchWinners();
        }       
        setInfo(true)

      })

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


 useEffect(()=>{
  {
    if(!whitelisted){
      setPopup(true)
    }else{
      setPopup(false)
    }
}
 },[whitelisted])

 



  return (
    <>

    <div className='container' style={{ filter:popup && 'blur(10px)'}}>
   
       <NavContainer />

        <div className='titlecontainer'>
          <h1 className='title'>TLAC</h1>
          <h4 className='subtitle'>TLAC is an exclusive online community of owners looking to revolutionize the <br/> ownership of rare exclusive collectibles.</h4>
          {
             feedback.length > 0 &&
               <div className='result'>{feedback}</div>
           }
           {
          presale &&  !whitelisted && !owner ?    
               <div className='result'>You're not whitelisted for Presale Mint</div> : '' 
           }
                   {
           owner &&
           <div className='ownercontainer'>
              <h1 className='winnertitle'>
               NFT Tickets left - {soldout}
              </h1>
             <div className='winnerlist'>
                {
                  winners.length === 0 ?
                  <p className='winner'>Yet to be Announced</p> 
                  :
                  winners.map((winner,idx)=>(
                    <p className='winner' key={idx}>{winner}</p>
                  ))
                }
             </div>
             
           </div>
         }
         {
           presale && whitelisted ?
          soldout != 0 && !owner ?
         
          <div className='mintcontainer'>
            {
              (blockchain.account === '' || blockchain.smartContract === null) ?
              <button className='mintbutton' onClick={(e)=>{
                e.preventDefault();
                dispatch(connect());
                getData();

              }}>
                Mint
              </button>
              :         
          <button className='mintbutton'  
           claimingNft={claimingNft}
            disabled={claimingNft ? 1 : 0}
  
              onClick={(e) => {
              e.preventDefault();
              mintNFTs();
              getData();
        
             }}>{claimingNft ? <TailSpin /> : "Mint"}</button>
             
            }
          </div>
          :
          !owner ?
            <div className='result'>Nfts are sold out</div>
            :
            ""

         : ""
         }
        </div>
        <a className='link' href='https://discord.gg/9BvBTyN2S7'>
        <button className='discordbutton2'>Join Discord </button>
        </a>
      
      <div className='roadmapcontainer'>
        <h1 className='roadmaptitle'>#TLAC ROADMAP</h1>
        <h1 className='roadmapsubtitle'>The Creators Of The Meta-Raffle</h1>
         <RoadMap />
      </div>
      
      <div className='countdowncontainer'>
        <h1 className='countdowntitle'>WHITELIST COUNTDOWN</h1>
        <Counter />
      </div>

      <div className='aboutcontainer'>
        <div className='group'>
          <div className='groupinfo'  style={{marginRight: right ? '28px' : "",marginLeft:right? '28px' : ""}}>
              <h1 className='grouptitle'>
              TLAC
              </h1>
              <h4 className='groupdesc'>
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
              </h4>
          </div>
          <div className='groupvideo' >
            <div className='video'>
            <ReactPlayer height={'100%'} width={'100%'}  url={"https://www.youtube.com/watch?v=qOPGT1af7l0&t=11s"} />
            </div>
   
          </div>
        </div>

        <div className='group'>
          <div className='groupvideo' >
          <div className='video'    style={{width:potrait && "250px"}}>
            <ReactPlayer height={'100%'} width={'100%'}  url={"https://www.youtube.com/watch?v=QGUbXKqJw58"} />
            </div>
          </div>
          <div className='groupinfo'>
           <h1 className='grouptitle'>Philanthropy</h1>
           <h4 className='groupdesc'>
           It is our obligation as an NFT project to use web3 technology to help the less fortunate. Our
          business model allows us to bridge innovation with impact. Every raffle we run will be partnered
          with a charity the community chooses. Charitable donations will be made from the proceeds of
          each raffle. We believe that doing so will help different charitable organizations with their current
          objectives while serving them a revolutionary platform with innovative methods for fundraising.
          For The Luxury Asset Club’s first meta-raffle, a percentage of proceeds have been arranged to
          be donated to the Make-A-Wish foundation, Greater LA Chapter.
           </h4>
          </div>
        </div>

        <div className='group'>
        
          <div className='groupinfo'  style={{marginRight: right ? '28px' : "",marginLeft:right? '28px' : ""}}>
            <h1 className='grouptitle'>In The Press</h1>
              <h4 className='groupdesc'>
                Over the last nine months of putting together this project, we have been fortunate enough to be
              featured in over 200 publications around the globe and seen in Times Square..Twice!
            </h4>
          </div>
          <div className='groupvideo' >
            <div className='video'  style={{width:potrait && "250px" }}>
            <ReactPlayer height={'100%'} width={'100%'}  url={"https://www.youtube.com/watch?v=ToJPfixYY4Q"} />    
            </div>
          </div>
        </div>  
        
        <div className='partnershipcontainer'>
          <div className='partnershiptitle'>PARTNERSHIPS</div>
          <div className='partners'>
           
            <img className='partnerimgs' src={SuperWorld}/>
            <img className='partnerimgs' src={Makeawish}/>
            <img className='partnerimgs' src={Enforceable} cover="true"/>
            <img className='partnerimgs' src={woodlawn}/>
          </div>
         <MaskContainer />
        </div>

      </div>
      <Footer />

      <div className='framecontainer'>
        <Frame />
      </div>


      <SocialMedia size="large"/>
    </div>
          {
           !whitelisted && popup && info ?
            (
                <div className='popupcontainer'>
                <form className='popupform' onSubmit={sendEmail}>
                <h1 className='whitelistetitle'>Whitelist User</h1>
                {
                    blockchain.account === null &&
                <div className='popupinfo'>Please Connect your Wallet</div>
                }
                <input className='input' type={"email"} placeholder="Email..." name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input className='input' type={"text"} placeholder="WalletAddress..." name="walletAdd" value={blockchain.account} onChange={(e)=>setwalletAddress(e.target.value)}/>
                {emailSent &&  !listed ?
                    <div className="success">
                        <p className="info">You are whitelisted successfully</p>
                    </div> 
                    :
                    ""
                }
                {
                    listed &&
                    <div className='fail'>
                        <p className='info' >You are already whitelisted</p>
                    </div>
                }
                {
                    invalid &&
                    <div className='fail'>
                        <p className='info'>Please enter the crendentials</p>
                    </div>
                }
                {
                    error &&
                    <div className='fail'>
                        <p className='info'>Something went wrong. Please try again </p>
                    </div>
                }
  
                  
             
                <button className='popupsubmit' type='submit'>{loading ? <TailSpin/> : "Submit"}</button>
        
                <button className='closebutton' onClick={closeModal}><MdClose color='white' size={'20px'}/></button>
                </form>
            </div>
            )
            :
            ""
        }

        </>
  )
}

export default HomePage