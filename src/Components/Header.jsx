import React, { useState } from 'react'
import Buttons from './Buttons'
import './Header.css'
import { CgMenuGridR } from "react-icons/cg";
const Header = () => {
const [List, setList] = useState(false) ;


const showAll =()=>{
    setList(!List);

}
  return (
    <>
       
       <main className='cont1' >
        <nav className='cont2'>
            <img className='img1' src="/src/assets/Logo.svg" alt="" />

            <ul className='list2'>
                <li>Products</li> 
                <li>Solutions</li>
                <li>Learning & Support</li>
                <li>Pricing</li>
            </ul>
        </nav>


         <section className='cont3'>
        <nav className='cont4'>
            <img className='img2' src="/src/assets/world.webp" alt="" />
            <ul className='list2'>
              <li>Contact Sales</li>
              <li> Log In</li>  
                </ul>  

               
         </nav>

          <Buttons className='btn1' text='Get Started'/>
          <div className='icondiv'>
          <CgMenuGridR 
          className='icion1'
           onClick={showAll}/>

           {!List && (
            <ul className='liststyle'>
                <li>Products</li> 
                <li>Solutions</li>
                <li>Learning & Support</li>
                <li>Pricing</li>
            </ul>
           )

           }
          </div>
</section>


       </main>

     
    </>
  )
}

export default Header
