import React from 'react'
import '../styles/OurClient.css';
import {Col, Image, Row} from 'react-bootstrap'
function OurClient() {
  return (
    <div className='ourClient-container'>
        <div style={{height:'100px'}}></div>
   <div className="container">
    <div className="ourClient-upper">
     <button>Our Client</button>
     <h4>Our Commitment to our clients</h4>
     <p>We understand, to continue our current growth, we must continuously develop our core products to keep pace with the needs of our clients and the overall business environment. Through all of this, our constant aim is to bring the best possible value to our clients, our people and our broader community. SAYV achieves Smarter-For-Life for clients by bringing all financial solutions together in the one place. We automate these client solutions through our software applications assisting clients to understand their financial needs. We then use the highly developed tips, suggestions and ideas built into the Personal Financial Management tool as tailored solutions that deliver the best
     possible outcome for each user's individual circumstances. As a result, SAYV’s clients can become smarter savers whilst developing and growing their lifestyles, health, wealth and achieve long term personal financial security.</p>
     <div style={{height:'50px'}}></div>
     
    </div>
    <div className="ourClient-lower ">
 <Row className='col-12'>
  {/*  first  */}
  <Col className='col-4'>
  <Row className='my-2'> <Image src='../..//client-1.png' fluid/></Row>
  <Row>
   <Col><Image src='../..//client-2.png' fluid /></Col> 
   <Col><Image src='../..//client-3.png' fluid /></Col> 
  </Row>
  <Row className='my-2'><Image src='../..//client-4.png'/></Row>
  </Col>
 {/* second */}
  <Col className='col-4'> <Image src='../..//client-5.png' fluid/></Col>
  {/* third */}
  <Col className='col-4'>
  <Image src='../..//client-6.png' fluid/>
  <Row className='my-2'>
<Col> <Image src='../..//client-7.png' fluid/></Col>
<Col> <Image src='../..//client-8.png' fluid/></Col>

  </Row>
  </Col>
 </Row>
    </div>
   </div>
   <div style={{height:'50px'}}></div>
    </div>
  )
}

export default OurClient