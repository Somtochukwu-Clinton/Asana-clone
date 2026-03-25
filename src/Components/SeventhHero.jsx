import React from 'react'
import Buttons from './Buttons'
import './SeventhHero.css'
const SeventhHero = () => {
  return (
    <>
      <main className='cont24'>
        <p className='text20'>The world’s top companies<br/>trust Asana</p>
        <Buttons className='btn9' text='See all case studies'/>
       
      <section className='container-1'>
         <nav>
            <img src="/src/assets/Danone.svg" alt="danone" />
            <div className='cont-3'>
            <p className='test4'>Company SIZE</p>
            <p className='test5'>Enterprise</p>
            <p className='test4'>INDUSTRY</p>
            <p className='test5'>Food & hospitality</p>
            </div>
         </nav>


         <nav className='container-2'>
            <p className='test1'>Asana makes everything shareable,<br/> which saves us time executing <br/>
                programs because it’s so much easier <br/>to replicate and learn from what<br/> others have done.</p>
                <p className='test2'>Simon Levinson</p>
                <p className='test3'>Global Digital Manufacturing Process Innovation Manager, Danone</p>
         </nav>
      </section>
      </main>
    </>
  )
}

export default SeventhHero
