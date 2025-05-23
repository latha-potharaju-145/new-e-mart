



import React from 'react'
import {computerData} from '../data/computer'


const TV= () => {

    const firstFiveImages = computerData.slice(0,5)
  return (
    <>
    <h2>Television</h2>
    <div className ='proSection' >
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className = 'imgBox'>
                        <img className= 'proImage'src={item.image} alt="..." />
                    </div>
                )
            }
            )
        }
        
    </div>
    </>
  )
}

export default TV