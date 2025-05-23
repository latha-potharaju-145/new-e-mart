



import React from 'react'
import { mobileData } from '../data/mobile'



const Speakers = () => {


    const firstFiveImages = mobileData.slice(0,5)
  return (
    <>
    <h2>Speakers</h2>

    <div className= 'proSection'>
{
    firstFiveImages.map((item)=>{

        return(
            <div className='imgBox'>
                <img className='proImage'src={item.image} alt="..." />
            
            </div>




        )

    })
}

    </div>
    </>
  )
  
}

export default Speakers
  
    
       
       
    
            
    
            
        




       
    
    

    



        
       
               

                
            
        



