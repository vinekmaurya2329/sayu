import React from 'react'
import '../styles/ourService.css'
import NavBar from './Navbar'
import { Col, Image, Row } from 'react-bootstrap'
import Feature from '../section/Feature'
import Cards from './Card'
import Cards2 from './Cards2'
import Footer from './Footer'


function OurServices() {
    const data = [
        {
            image:'../..//feature-1.png',
            title:'Connecting Financial Institutions',
            description:'Easily connect your bank accounts to SAYV for a consolidated view of your finances. Ensure secure and seamless integration for comprehensive financial management.',
            logo:'../..//feature-1-logo.png',
            heading:'Securely Link Your Accounts',
            buttonTxt:'feature 1',
            L_order:1,
            R_order:2
        },
        {
            image:'../..//feature-2.png',
            title:'Connecting Financial Institutions',
            description:'Easily connect your bank accounts to SAYV for a consolidated view of your finances. Ensure secure and seamless integration for comprehensive financial management.',
            logo:'../..//feature-2-logo.png',
            heading:'Securely Link Your Accounts',
            buttonTxt:'feature 2',
            L_order:2,
            R_order:1

        },
        {
            image:'../..//feature-3.png',
            title:'Connecting Financial Institutions',
            description:'Easily connect your bank accounts to SAYV for a consolidated view of your finances. Ensure secure and seamless integration for comprehensive financial management.',
            logo:'../..//feature-3-logo.png',
            heading:'Securely Link Your Accounts',
            buttonTxt:'feature 3',
            L_order:1,
            R_order:2
        }
    ]
    const cards = [
      {  logo:'../..//yourSavy-1.png',
        bgImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmRdUggtIKfuk-OwDHbBIOWtK6K0saEMTdg&s',
        description:'Track your regular bills to identify significant expenses that might be worth switching providers for. ',
        title:'Stay top of the regular payments'
    },
    {  logo:'../..//yourSavy-2.png',
        bgImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmRdUggtIKfuk-OwDHbBIOWtK6K0saEMTdg&s',

        description:'Budget & Save Make your money work harder by setting goals to build up your savings or pay down debt.',
        title:'Budget & Save'
    }, {  logo:'../..//yourSavy-3.png',
        bgImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmRdUggtIKfuk-OwDHbBIOWtK6K0saEMTdg&s',

        description:'Get a clear picture of your overall financial position in real-time by syncing your accounts with the personal finance manager (powered by Basiq.io) in the SAYV App.',
        title:'Real-Time Financial Summary'
    }, {  logo:'../..//yourSavy-3.png',
        bgImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmRdUggtIKfuk-OwDHbBIOWtK6K0saEMTdg&s',

        description:'Understand your spending habits to identify where you can save money. With automatic categorisation, tracking your expenses across all accounts is simple and streamlined.',
        title:'Get a Handle on Your Spending'
    }

    ]
    const feature5 =  {
        image:'../..//feature-5.png',
        title:'Open & Banking :',
        description:'SAYV uses Basiq.io open banking proprietary software drive its PFM and to unlock value and transparency. It performs this to steer users towards obtaining improveddeals on financial products and services, but without having any financial interest in suchsuggestions.Personal budgeting and financial management are essential, and tools like SAYV can play asignificant role in helping users achieve not only their financial goals but importantly their lifeand health goals while saving and/or making money along the way.Many free-to-use budgeting and finance apps derive their revenue streams from back-end commissions paid by businesses to whom the app user is subliminally directed with numerousdiscount offers on finance products, investment products, insurances etc and/or advertising tothose users from these or other product suppliers.SAYV on the other hand will not only provide competitive quality budgeting and financeinformation tools for an affordable monthly fee but goes a quantum leap further by offering the users valuable “how to become a smarter saver” advice and tools, without any lock-incontracts.',
        
        heading:'Securely Link Your Accounts',
        buttonTxt:'feature 5',
        L_order:1,
        R_order:2
    }
    
  return (
    <>
    <div className='ourService-container'>
      
  <div className="container">
    <div className="ourService-upper">
    <div style={{height:'100px'}}></div>

        <button>Our Services</button>
        <h4>Explore SAYV's Key Features</h4>
        <p>
        SAYV is a unique software application company that provides a fully integrated Personal Financial Management & Budgeting tool. Our talented and collaborative team of professionals take a big picture approach to care for our client users and their cost-of-living, saving & lifestyle needs. We make a positive difference to the world every day, by changing people’s lives for the better. SAYV was established on three key pillars: Our Clients, Our People and Our Community; these form the foundation of our business and guide us in everything we do.</p>
    </div>
    
  </div>
    </div>
  <div className="features">

  {
    data.map(({title,description,heading,image,buttonTxt,logo,L_order,R_order})=>(
    <Feature title={title} description={description} image={image} logo={logo} heading={heading} buttonTxt={buttonTxt} L_order={L_order} R_order={R_order}/>

    ))
}    
  </div>
 <div className='bg-white  feature-footer'>
 <div className='our-service-card container' style={{width:'',display:'flex', justifyContent:'center',alignItems:'center'}}>
   


{
  cards.map(({logo,title,bgImage,description})=>(
  
    <Cards2 title={title} bgimage={bgImage} discription={description} logo={logo}  />
    
   
))
}
  
    </div>
    <div style={{height:'100px'}}></div>
    <Feature title={feature5.title} description={feature5.description} image={feature5.image} logo={feature5.logo} heading={feature5.heading} buttonTxt={feature5.buttonTxt} L_order={feature5.L_order} R_order={feature5.R_order}/>

 </div>
    
 

    </>
  )
}

export default OurServices