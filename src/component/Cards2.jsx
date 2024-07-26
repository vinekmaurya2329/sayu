import React from 'react'
import { CardImg, CardImgOverlay } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function Cards2({logo,title,discription,bgimage}) {
  return (
  
 
 <Card className='card2-container rounded-4 h-100 ' style={{backgroundImage: `url(${bgimage})`,backgroundSize:'cover',backgroundPosition:'center', }}>
      <Card.Body className='h-100 card2-body ' >
        {/* <CardImg src={bgimage} style={{width:'300px'}}/> */}
        <img src={logo} alt="" className='card2-logo' />
        <Card.Title className='card2-title'> {title}</Card.Title>
        
        <Card.Text className='card2-description'>
          {discription}
        </Card.Text>
        
      </Card.Body>
    </Card>



   
  )
}

export default Cards2