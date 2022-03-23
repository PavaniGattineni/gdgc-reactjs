import React,{useState,useEffect,useRef} from 'react'
import styled from 'styled-components'

const Container=styled.div`
  display: flex;
  align-items:center;
  height:155px;
  z-index:99;

  @media (max-width: 500px){
    width:100%;
    disaply:flex;
    padding:20px;
  }

  `

 
  const TimeContainer=styled.div`
  position: relative;
  margin: 0 20px;
  background-color: #000;
  color: #fff;
  height:112px;
  width:112px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size: 50px;
  font-weight: 600;
  border-radius: 15px;
  text-align: center;
  z-index:99;


  @media screen and (max-width: 500px) {
   height:65px;
   width:65px;
   font-size:24px;
   border-radius:8px;
   margin:0 10px;
  }


   @media (min-width: 501px) and (max-width: 767px){
    height:80px;
    width:80px;
    font-size:50px;
    border-radius:15px;
    margin:0 10px;
   }

  `
  const Word=styled.p`
  font-size:16px;
  font-weight:600;
  padding:15px;
  text-align:center;
  z-index:99;


  @media screen and (max-width: 500px) {
   font-size:12px;
   padding:8px;
  }

  @media (min-width: 501px) and (max-width: 767px){
    font-size:14px;
    padding:8px;
   }
  `

  const Wordcontainer=styled.div`
  position: absolute;
  width:100%;
  background-color: rgba(0,0,0,.1);
  border-radius: 0px 0px 15px 15px;
  color: #000;
  left:0;
  top:100px;
  text-align: center;
  box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 500px) {
  border-radius: 0px 0px 10px 10px;
   top:55px;
  z-index:99;
  }

  @media (min-width: 501px) and (max-width: 767px){
    border-radius: 0px 0px 10px 10px;
    top:75px;
     z-index:99;
   }
  `

  const Colon=styled.h1`
  font-size: 75px;
  font-weight: 700;
  z-index:99;



  @media screen and (max-width: 580px) {
   font-size:30px;
  }

  
  @media (min-width: 501px) and (max-width: 767px){
    font-size:40px;
   }
  `

const Counter = () => {

  const [countdays, setCountDays] = useState('00');
  const [counthours, setCountHours] = useState('00');
  const [countminutes, setCountMinutes] = useState('00');
  const [countseconds, setCountSeconds] = useState('00');


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
  return (
    <Container>
           
    <TimeContainer>{countdays}
    <Wordcontainer>
    <Word> Days</Word>
    </Wordcontainer>  
    </TimeContainer>
    

    <Colon>:</Colon>

     <TimeContainer>{counthours}
    <Wordcontainer>
    <Word>Hours</Word>
     </Wordcontainer> 
    </TimeContainer>

     <Colon>:</Colon>

     <TimeContainer>{countminutes}
      <Wordcontainer>
        <Word>Minutes</Word>
     </Wordcontainer> 
       </TimeContainer>

     <Colon>:</Colon>


        <TimeContainer>{countseconds}
       <Wordcontainer>
        <Word>Seconds</Word>
     </Wordcontainer> 
       </TimeContainer >
   </Container>
  )
}

export default Counter