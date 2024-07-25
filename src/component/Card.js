import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/card.css'
function Cards({title,description,img}) {
  return (
    <div className='card-container'>
        <Card style={{ width: '15rem' ,border:'none'}}>
      <Card.Img variant="top" width={'100px'} height={'200px'} src={img} style={{borderRadius:'30px'}} />
      <Card.Body>
        <Card.Title style={{color:'#004AAD'}}>{title}</Card.Title>
        <Card.Text style={{color:'#6F7D88'}}>
          {description}
        </Card.Text>
      </Card.Body>
    
      
    </Card>
    </div>
  )
}

export default Cards