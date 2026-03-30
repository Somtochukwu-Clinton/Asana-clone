import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import './EightHero.css'

const EightHero = () => {
  return (
    <>
      <main className='section1'>

        <section className='section2'>
            <p className='tes1'>Get started easily</p>
        <p className='tes2'>Tour the platform, read a few deep dives, or kickstart<br/> your work management journey with the right template.</p>
        </section>
        
        <nav className='nav-1'>
           <nav className='nav3'>
        <section className='section3'>
         
            <p className='tes3'>Try the Asana demo</p>
            <p className='tes4'>See Asana in action Discover resourc</p>
        </section>
        <section className='section4'>
        <FaArrowRight className='icion3'/>
        </section>
        </nav>
      

           <nav className='nav3'>
        <section>
            <p className='tes3'>Try the Asana demo</p>
            <p className='tes4'>See Asana in action Discover resourc</p>
        </section>
        <section className='section4'>
        <FaArrowRight className='icion3'/>
        </section>
         </nav>
 
         <nav className='nav3'>
        <section>
            <p className='tes3'>Try the Asana demo</p>
            <p className='tes4'>See Asana in action Discover resourc</p>
        </section>
        <section className='section4'>
        <FaArrowRight className='icion3'/>
        </section>

        </nav>
      
        </nav>
      </main>
    </>
  )
}

export default EightHero
