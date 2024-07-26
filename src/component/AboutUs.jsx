import React from 'react'
import '../styles/AboutUs.css'
import OurStory from '../section/OurStory'
import OurClient from './OurClient'
import OurTeam from './OurTeam'
import OurTeam_2 from '../section/OurTeam-2'
import OurTeam_3 from '../section/OurTeam-3'
import About from '../section/About'
import Footer from './Footer'
import NavBar from './Navbar'
function AboutUs() {
  return (
    <><NavBar/>
    <div className='aboutUs-container'>
         <div className="container">
            <div style={{height:'60px'}}></div>
            <button>About us</button>
            <h4>About your Sayv</h4>
            <p>
            SAYV is a unique software application company that provides a fully integrated Personal Financial Management & Budgeting tool. Our talented and collaborative team of professionals take a big picture approach to care for our client users and their cost-of-living, saving & lifestyle needs. We make a positive difference to the world every day, by changing people’s lives for the better. SAYV was established on three key pillars: Our Clients, Our People and Our Community. these form the foundation of our business and guide us in everything we do.</p>
            <div style={{height:'70px'}}></div>
        
         </div>
         <OurStory/>
         <OurClient/>
         <OurTeam/>
         <OurTeam_2/>
         <OurTeam_3/>
       
    </div>
     <Footer/>
    </>
  )
}

export default AboutUs