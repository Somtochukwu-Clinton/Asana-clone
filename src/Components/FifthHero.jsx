import React from 'react'
import './FifithHero.css'
import Buttons from './Buttons'
const FifthHero = () => {
  return (
    <>
      <main className='cont18'>
        <section>
            <p className='text11'>What sets Asana apart</p>

            <nav className='cont19'>
                <div className='cont16'>
                    <div className='cont17'>
                <p className='text12'>Amplify your impact with AI</p>
                <h3 className='text13'>Let Asana AI handle work for you—with <br/>the full context of your business—so your <br/>teams can achieve their goals faster.</h3>
                </div>
                 <img className='img7' src="/src/assets/page2.webp" alt="" />
            </div>

            <div className='cont20'>
                <p className='text14'>More clarity and accountability</p>
                <p className='text15'>Connect strategic goals to the teams that<br/> help achieve them. Keep your company<br/> on track with AI working alongside your<br/> teams.</p>
            </div>
            </nav>
        </section>
      </main>




      <main className='cont21'>
         <img className='img8' src="/src/assets/asanaicion.webp" alt="" />
            
        <section>
           <p className='text16'>Stay secure and compliant with Asana Gov</p>
           <p className='text17'>Asana Gov empowers government agencies to<br/>coordinate critical work—from strategic planning to <br/>rapid response—on a platform that’s easy to implement,<br/> scales seamlessly, and meets your compliance needs.</p>
        </section>

        <Buttons className='btn7' text='Check out Asana Gov'/>
      </main>
    </>
  )
}

export default FifthHero
