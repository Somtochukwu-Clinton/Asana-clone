import React from 'react'
import Buttons from './Buttons'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <main className='cont6'>
        <section className='cont7'>
            <p  className='text1'>Supercharge your teams<br/>with AI that gets work done</p>

            <p  className='text2'>Give your teams AI that understands their work, 
                keeps projects moving, 
                and<br/>gets better the more your teams use it.</p>

               
        </section>

        <div className='butncont'>
             <Buttons className='btn2' text='Get started'/>

                <Buttons className='btn3' text='Contact sales'/>
        </div>
      </main>
    </>
  )
}

export default Hero
