import React from 'react'
import Buttons from './Buttons'
import './SixthHero.css'


const SixthHero = () => {
  return (
    <>
      <main className='cont23'>
        <p className='text18'>Connect over <br/>300+ <br/>integrations</p>

        <p className='text19'>Asana connects with the enterprise tools<br/>your organization already uses, right out of <br/>the box.</p>
      <Buttons text='See all integrations' className='btn8'/>
         <section>
          <article className='cont22'>
            <img className='img9' src="/src/assets/Microsoft Teams.svg" alt="logo1" />
            <img className='img9' src="/src/assets/Google Drive.svg" alt="logo2" />
            <img className='img9' src="/src/assets/Salesforce.svg" alt="logo3" />
                        <img className='img9' src="/src/assets/Figma.svg" alt="logo3" />
          </article>



          <article className='cont22'>
            <img className='img9' src="/src/assets/Nightfall.svg" alt="logo1" />
            <img className='img9' src="/src/assets/Vimeo.svg" alt="logo2" />
            <img className='img9' src="/src/assets/Okta.svg" alt="logo3" />
                        <img className='img9' src="/src/assets/Microsoft.svg" alt="logo3" />
          </article>
         </section>
      </main>
    </>
  )
}

export default SixthHero
