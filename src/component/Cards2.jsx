import React from 'react'
import { CardImg, CardImgOverlay } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function Cards2({logo,title,discription,bgimage}) {
  return (
    <div>
 <div className=''>
 <Card style={{ width: '18rem',height:'270px' ,borderRadius:'30px'}} className='card2-container'>
      <Card.Body>
        {/* <CardImg src={logo} style={{width:'30px'}}/> */}
        <img src={logo} alt="" />
        <Card.Title> {title}</Card.Title>
        
        <Card.Text className=''>
          {discription}
        </Card.Text>
        
      </Card.Body>
    </Card>

 </div>

    </div>
  )
}

export default Cards2