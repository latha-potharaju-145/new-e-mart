



import React from 'react'
import {menData} from '../data/men'
import NavBar from '../components/NavBar'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const MenPage = () => {
  const [selectedProduct,setSelectedProduct] = useState([])
  const companyHandler=(mango)=>{
    if(selectedProduct.includes(mango)){
      setSelectedProduct(selectedProduct.filter(item=>item!==mango))
    }else{
      setSelectedProduct([...selectedProduct,mango])
    }
  }
  const filteredProduct = selectedProduct.length===0?
  menData : menData.filter((orange)=>selectedProduct.includes(orange.brand))
  console.log(filteredProduct);
  
  return (
    <>
    <NavBar/>
    <div className="fullPage">
      <div className="pro-selected">
        {menData.map((phone)=>
        {
          return(
            <div className="input-sec">
              <label>
                <input type="checkBox"
                checked={selectedProduct.includes(phone.brand)}
                onChange={()=>companyHandler(phone.brand)} />
                {phone.brand}
              </label>
        
              
            </div>
          )
        })}
      </div>
    <div className='pageSection'>

        {menData.map((item)=>{

return(
<div>
<Link to = {`/men/${item.id}`}>
<div className="pageImg">
    <img src={item.image} alt="" />
</div>
</Link>
<div className="proModel">
    {item.company},{item.model}
</div>

</div>

)
        }
        )
        }

    </div>
    </div>
    </>
  )
}

export default MenPage