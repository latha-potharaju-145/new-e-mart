



import React from 'react'
import {computerData} from '../data/computer'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { mobileData } from '../data/mobile'

const ComputerPage = () => {
  const [selectedProduct,setSelectedProduct] = useState([])
  const companyHandler= (mango)=>{
    if(selectedProduct.includes(mango)){
      setSelectedProduct(selectedProduct.filter(item=>item!==mango))
    }else{
      setSelectedProduct([...selectedProduct,mango])
    }
  }
  const filteredProduct = selectedProduct.length===0?
  mobileData : mobileData.filter((orange)=>selectedProduct.includes(orange.company))

console.log(filteredProduct);

  return (
    <>
    <NavBar/>
    <div className="fullPage">
      <div className="pro-selected">
        {computerData.map((phone)=>
        {
          return(
            <div className="input-sec">
              <label>
                <input type="checkBox"
                checked={selectedProduct.includes(phone.company)}
                onChange={()=>companyHandler(phone.company)}
                 />
                 {phone.company}
              </label>
            </div>
          )
        })}
      </div>
    {/* </div> */}
    <div className='pageSection'>

        {computerData.map((item)=>{

return(
<div>
<Link to = {`/computer/${item.id}`}>
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

export default ComputerPage