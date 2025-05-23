

import React from 'react'
import {fridgeData} from '../data/fridge'
const Fridge = () => {
    const firstFiveImages= fridgeData.slice(0,5)
  return (
    <>
    <h2>Fridges</h2>
    <div className='proSection'>
{
 firstFiveImages.map((item)=>
 {
    return(
        <div className="imgBox">
            <img proImage src={item.image} alt="..." />
        </div>
    )
 }
 )
}
    </div>
    </>
  )
}

export default Fridge