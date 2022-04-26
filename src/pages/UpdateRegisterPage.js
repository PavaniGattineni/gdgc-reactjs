// import React,{useEffect} from 'react'
// import emailjs from 'emailjs-com'
// import styled from 'styled-components'
// import logo from '../assets/logo.png'
// import goldbrick from '../assets/Goldbrick.gif'
// import Barcode from '../components/Barcode/Barcode'

// import frame from '../assets/Frame.png'
// import { useState } from 'react'
// import Counter from '../components/Counter/Counter'
// import SocialMedia from '../components/Socialmedia/SocialMedia'
// import {useDispatch,useSelector} from 'react-redux';
// import {fetchData} from '../redux/Actions/Data/data'
// import {connect} from '../redux/Actions/blockchain/Blockchain'
// import TailSpin from 'react-loading-icons/dist/components/tail-spin'




// const Container = styled.div`
// position:relative;
// width: 100%;
// height:100%;
// display:flex;
// flex-direction:column;
// align-items:center;
// background: linear-gradient(90.13deg, #efe9ce 0.15%, #cfdbd9 99.93%);

// `
// const TitleContainer = styled.div`
// display: flex;
// align-items: center;
// position: relative;
// margin-bottom:50px;
// flex-direction:column;
// z-index:99;

// `
// const LogoContainer = styled.div`
// height: 250px;
// width: 250px;


// @media screen and (max-width: 580px) {
//       height:150px;
//       width:150px;
//     }
// `
// const Logo = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `

// const Link=styled.a`
// link-decoration-style:none;
// position: absolute;
// top: 100px;
// right: 120px;

// @media screen and (max-width: 700px) {
// display:none;
// }
// `
// const DiscordButton = styled.button`
// background-color: #000;
// color: #fff;
// width: 180px;
// padding: 10px;
// border: none;
// border-radius: 10px;
// font-size:18px;
// font-weight: 700;
// cursor:pointer;

// &:hover{
//     background-color:#444;
//     color:#f6f6f6;
// }
// `
// const HeaderContainer = styled.div`
//     width:100%;
//     display:flex;
//     align-items:center;
//     flex-direction:column;
//     text-align: center;
//     margin-bottom:50px;
//     z-index:99;
//     position:relative;

//     @media screen and (max-width: 500px) {
//         margin:0;
//         }

// `
// const Title = styled.h1`
// font-size: 75px;
// font-weight:700;

// @media screen and (max-width: 500px) {
// font-size:40px;

// @media (min-width: 501px) and (max-width: 1300px){
// font-size:50px;
//    }
// }
// `

// const Subtitle = styled.p`
//     font-size: 24px;
//     font-weight: 600;

//     @media screen and (max-width: 500px) {
//         font-size:14px;
//         }

//     @media (min-width: 501px) and (max-width: 1300px){
//         font-size:18px;
//      }
// `
// const Link2=styled.a`
// link-decoration-style:none;
// display:none;

// @media screen and (max-width: 700px) {
// display:flex;
// align-items:center;
// margin:20px;
// }

// `
// const DiscordButton2 = styled.button`
// background-color: #000;
// color: #fff;
// width: 150px;
// padding: 10px;
// border: none;
// border-radius: 10px;
// font-size:14px;
// font-weight: 700;
// cursor:pointer;

// &:hover{
//     background-color:#444;
//     color:#f6f6f6;
// }
// `



// const FrameContainer=styled.div`
// width:100%;
// height:100vh;
// position:absolute;
// top:22%;
// z-index:1;

// @media screen and (max-width:500px){
// top:20%;
// height:600px;
// }
// `

// const Frame=styled.div`
// width:100%;
// height:100%;
// mix-blend-mode: darken;
// background:url(${frame}) top no-repeat;
// z-index:1;

// `

// const BarcodeDesc=styled.p`
// font-size:14px;
// font-weight:600;
// margin:10px;


// @media screen and (max-width:500px){
// font-size:12px;

// }
// `


// const UpdateRegisterPage = () => {




//     const [CONFIG, SET_CONFIG] = useState({
//         CONTRACT_ADDRESS: "",
//         SCAN_LINK: "",
//         MAX_SUPPLY: 1,
//         WEI_COST: 0,
//         DISPLAY_COST: 0,
//         GAS_LIMIT: 0,
//       });


//     const dispatch=useDispatch();
//     const blockchain=useSelector((state)=>state.blockchain);
//     const data=useSelector((state)=>state.data);
    

      
 
 
//     const getConfig = async () => {
//         const configResponse = await fetch("/config/config.json", {
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//         });
//         const config = await configResponse.json();
//         SET_CONFIG(config);
//       };

//     const getData = () => {
//         if (blockchain.account !== "" && blockchain.smartContract !== null) {
//           dispatch(fetchData(blockchain.account)).then(()=>{

//           })
//         }
//       };


 
   
//     let gasLimit = CONFIG.GAS_LIMIT;
//     let totalGasLimit = String(gasLimit);
    

    


//     return (

//         <Container >

//             <TitleContainer>
//                 <LogoContainer>
//                     <Logo src={goldbrick} />
//                 </LogoContainer> 
//             </TitleContainer>
//                 <Link href='https://discord.gg/9BvBTyN2S7'>
//                 <DiscordButton >Join Discord</DiscordButton>
//                 </Link>
            
//             <HeaderContainer>
//                 <Title>Welcome to TLAC</Title>
//                 <Subtitle>CREATORS OF THE WORLD'S FIRST META-RAFFLE</Subtitle>
//                 <Link2 href='https://discord.gg/9BvBTyN2S7'>
//                 <DiscordButton2>
//                     Join Discord
//                 </DiscordButton2>
//                 </Link2>
                
//             </HeaderContainer>

//             <Counter  />

//             <FrameContainer>
//             <Frame/>
//             </FrameContainer>
    
//             <Barcode />
//             <BarcodeDesc>TLAC 2022. All Rights Reserved</BarcodeDesc>
//             <SocialMedia />
            
//         </Container>

//     )
// }

// export default UpdateRegisterPage

 



// // blockchain.smartContract.methods.removeWhitelistUser(blockchain.account).send({from:blockchain.account})



//         //    emailjs.sendForm('service_vgh1cao', 'template_uwhuqgl', e.target,
//         //    'd1yMbjx7hhKgbin29').then((result) => {
//         //        setEmailSent(true)
//         //        setEmail('')
//         //        setwalletAddress('')
//         //        setLoading(false)
//         //        setTimeout(
//         //            () => {
//         //                setEmailSent(false)
//         //                closeModal();
//         //            },
//         //            3000
//         //        )
//         //    }, (error) => {
//         //        setError(true)
//         //        setEmail('')
//         //        setAddress('')
//         //        setTimeout(
//         //            () => {
//         //                setError(false)
//         //            },
//         //            3000
//         //        )
//         //    })