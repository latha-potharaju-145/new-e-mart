



import React,{useState} from 'react'
import {watchData} from '../data/watch'
import NavBar from '../components/NavBar'

import { Link } from 'react-router-dom'




const WatchesPage = () => {
  const [selectedProduct,setSelectedProduct] = useState([])
  const companyHandler=(mango)=>{
    if(selectedProduct.includes(mango)){
      setSelectedProduct(selectedProduct.filter(item =>item!==mango))
    }
    
    else{
      setSelectedProduct([...selectedProduct,mango])
    }
  }
  const filteredProduct= selectedProduct.length===0?
  watchData : watchData.filter ((orange)=>selectedProduct.includes(orange.brand))

  return (
    <>
    <NavBar/>
    <div className="fullPage">
      <div className="pro-selected">
        {watchData.map((phone)=>{
          return(
            <div className="input-sec">
              <label>
                <input type="checkBox"
                checked= {selectedProduct.includes(phone.brand)}
                onChange={()=>companyHandler(phone.brand)} />
                {phone.brand}
              </label>
            </div>
          )
        }
        )}
      </div>

    <div className='pageSection'>

        {filteredProduct.map((item)=>{

return(
<div>
  <Link to= {`/watch/${item.id}`}>

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

export default WatchesPage