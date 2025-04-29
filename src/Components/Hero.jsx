import React from 'react'

function Hero() {
  return (
    <main className='hero container' >
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className='hero-btn'>
                <button>Shop Now</button>
                <button className='hover-fill-btn'>Category</button>
            </div>
           
        </div>
        <div className='hero-image'>
            <img src='/images/hero-image1.jpg' alt="hero-image"/>
        </div>
    </main>
  )
}

export default Hero
