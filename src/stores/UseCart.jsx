

import React from 'react'
import { useCart } from './context/CartContext'
import NavBar from './components/NavBar'


const UseCart = () => {
    const {cartItems,addToCart,removeFromCart} = useCart();
    console.log(addToCart);
    
    
  return (
    <>
    <NavBar/>
    <div>
        <h2 className='y-cart'>Your Cart</h2>
        {cartItems.length===0 ?
        (<p className='empty'>Your Cart is Empty</p>):
    
    <div>
        {cartItems.map((item)=>{
            return(
                <div>
                    <div className="cart-Section">
                        <div className="cart-img">
                            <img src={item.image}alt="" />
                        </div>
                        <div className="cart-details">
                            <h3>{item.product}</h3>
                            <h2>{item.price}</h2>
                        </div>
                        <h3>{item.model}</h3>
                    </div>
                    <button className='removeBtn' onClick={()=> removeFromCart(item)}>Remove</button>
                </div>
            )
        })}
    </div>
}

</div>
</>
  )
}

export default UseCart