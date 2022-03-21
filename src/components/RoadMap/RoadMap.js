import React from 'react'
import Data from '../../data'
import RoadMapItem from './RoadMapItem'
import './RoadMap.scss'



const RoadMap = () => {
  return (
    <div className='MapContainer'>
            {Data.length >0 &&  Data.map((item,idx)=>(
               <RoadMapItem  data={item} key={idx}/>
            ))}
            <div className='CircleContainer'>
              <div className='smallcircle'></div>
            </div>

    </div>
  )
}

export default RoadMap