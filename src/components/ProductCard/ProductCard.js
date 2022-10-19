import React from 'react'
import './ProductCard.css'

function ProductCard() {
  return (
    <div className='cardContainer'>
        <img className='mobileImg' src='/images/image-product-mobile.jpg' alt='producto' />
        <img className='desktopImg' src='/images/image-product-desktop.jpg' alt='producto' />
        <div className='infoContainer'>
            <p className='product'>perfume</p>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p className='text'>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                Perfumer-Creator for the House of CHANEL.            
            </p>
            <div className='price'>
                <h3>$149.99</h3>
                <p className='oldPrice'>$169.99</p>
            </div>
            <div className='buttonContainer'>
                <button className='addButton'>
                    <img src="/images/icon-cart.svg" alt="Cart" width='15'/>
                    Add to Cart
                </button>
            </div>
        </div>
    </div>

  )
}

export default ProductCard