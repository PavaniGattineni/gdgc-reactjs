import React from 'react'


const RoadMapItem = ({data}) => {
  return (
    <div className='ItemContainer'>
            <div className='inner'>
            <h4 className='Desc'>{data.procedure}</h4>
            </div>
            <div className='Circle'>{data.id}</div>
            <h1 className='Header'>{data.step}</h1>
          
    </div>
  )
}

export default RoadMapItem