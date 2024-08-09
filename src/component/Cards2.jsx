import React from 'react'
import { CardImg, CardImgOverlay } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function Cards2({logo,title,discription,bgimage}) {

  const style = {
    card2body : {
     display:'flex',
    justifyContent:'center',
    rowGap:'20px'
    }
  }
  return (
  
 
 <Card className='card2-container rounded-4 h-100 ' style={{backgroundImage: `url(${bgimage})`,backgroundSize:'cover',backgroundPosition:'center' }}>
      <Card.Body className='h-100 card2-body ' >
        {/* <CardImg src={bgimage} style={{width:'300px'}}/> */}
        <img src={logo} alt="" className='card2-logo my-2' />
        <Card.Title className='card2-title my-3'> {title}</Card.Title>
        
        <Card.Text className='card2-description my-2'>
          {discription}
        </Card.Text>
        
      </Card.Body>
    </Card>



   
  )
}

export default Cards2