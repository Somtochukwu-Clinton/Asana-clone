import React from 'react'
import Buttons from './Buttons'
import './ThirdHero.css'
const ThirldHero = () => {
  return (
    <>
    <main>
        
 <h3 className='text5'>The platform for human +<br/> AI collaboration</h3>
 <nav>
    <section className='cont12'>
        <Buttons className='btn4' text='Marketing'/>
        <Buttons className='btn5' text='Operations'/>
        <Buttons className='btn5'  text='IT'/>
        <Buttons className='btn5' text='LeaderShip'/>
    </section>
    

    <article className='cont11'>
        <img className='img5' src="/src/assets/page.webp" alt="page" />

        <div>
            <h3 className='text6'>Maximize campaign ROI</h3>
            <h3 className='text7'>Streamline campaign management</h3>
            <h3  className='text7'>Enhance creative production</h3>
            <h3  className='text7'>Manage events and editorial calendars</h3>
            <Buttons className='btn6' text='Get Started'/>
        </div>
    </article>
    </nav>
    </main>
    </>
  )
}

export default ThirldHero
