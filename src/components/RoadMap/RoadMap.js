import React from 'react'
//import Data from '../../data'
import RoadMapItem from './RoadMapItem'
import './RoadMap.scss'



const RoadMap = () => {
  return (
    <div className='MapContainer' id='roadmap'>
            <RoadMapItem />
            <div className='CircleContainer'>
              <div className='smallcircle'></div>
            </div>

    </div>
  )
}

export default RoadMap
