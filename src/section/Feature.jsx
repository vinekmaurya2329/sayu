import React from 'react'
import { Image } from 'react-bootstrap'
import '../styles/feature.css'
function Feature({logo,title,description,heading,buttonTxt,image,L_order,R_order}) {
  return (
    <>
       <div className="feature-1-container">
       <div style={{height:'100px'}}></div>
        <div className="container">
        <div className="left-1" style={{order:L_order}}>
   <Image src={image} fluid/>
        </div>
        <div className="right-1" style={{order:R_order}}>
     <button>{buttonTxt}</button>
     <h4>{title}</h4>
     <h6>{heading}</h6>
      <img src={logo} alt="lgo" className='logo' />
     <p>{description}</p>
        </div>
        </div>
        <div style={{height:'100px'}}></div>
       
    </div>
    </>
  )
}

export default Feature