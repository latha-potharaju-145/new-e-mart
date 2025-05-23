

import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const NavBar = () => {
    const { cartItems } = useCart()
    // const cartCount = cartItems.length

    return (
        <>

            <div className="NavSection">
                <div className='title'>
                    <h2>E-Mart</h2>
                </div>
                <div className="search">
                    <input type="text" placeholder='Search...' />
                </div>
                <div className="user">
                    <div className="user-detail">
                        SignIN/SignUP
                    </div>
                    <Link to='/cart'>  <div className="cart">
                        Cart
                        <span>{cartItems.length}</span>
                    </div>        </Link>


                </div>
            </div>
            <div className="subMenu">
                <ul>
                    <Link to='/mobile'>        <li>Mobiles</li>

                    </Link>
                    <Link to='/computer'>        <li>Computers</li>
                    </Link>
                    <Link to='/watch'> <li>Watches</li></Link>
                    <Link to='/men'><li>Men Fashion</li></Link>


                    <Link to='/woman'>   <li>Woman Dressing</li></Link>
                    <Link to='/furniture'>       <li>Furniture</li></Link>
                    <Link to='/ac'>        <li>Ac</li></Link>

                    <Link TO='/kitchen'>        <li>Kitchen</li></Link>
                    <Link to='/fridge'>        <li>Fridge</li></Link>

                    <Link to='/speaker'>        <li>Speakers</li></Link>

                    <Link to='/tv'> <li>TVs</li></Link>
                </ul>
            </div>


        </>




    )
}

export default NavBar