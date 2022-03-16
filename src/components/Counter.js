import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
  display: flex;
  align-items:center;
   height:155px;
   z-index:99;
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

  @media screen and (max-width: 580px) {
   height:60px;
   width:60px;
   font-size:24px;
   border-radius:8px;
   margin:0 10px;
  }

  `
  const Word=styled.p`
  font-size:16px;
  font-weight:600;
  padding:15px;
  text-align:center;

  @media screen and (max-width: 500px) {
   font-size:12px;
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
   top:50px;
  }
  `

  const Colon=styled.h1`
  font-size: 75px;
  font-weight: 700;


  @media screen and (max-width: 580px) {
   font-size:30px;
  }
  `

const Counter = ({countdays,counthours,countminutes,countseconds}) => {
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
       </TimeContainer>
   </Container>
  )
}

export default Counter