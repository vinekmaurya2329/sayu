import React from 'react'
import '../styles/contactUs.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, InputGroup, Row } from 'react-bootstrap';
import FAQ from './FAQ';

function ContactUs() {
  return (
   <>
   
<div className='contactUs-container'>
<div style={{height:'70px'}}></div>
  <div className=" container contactUs-upper">
    
    <button>Contact Us</button>
    <h4>Get in  Touch</h4>
    <p>Have questions or need assistance? Reach out to our support team for help. We're here to ensure <br /> you have the best experience with SAYV and achieve your financial goals.</p>
  </div>
   <div style={{height:'150px'}}></div>
</div>
   <div className="contactUs-lower">
    <div className="container-1">
        <div style={{height:'100px'}}></div>
        <button>Contact us</button>
        <h4>Contact Us: We're Here to Help</h4>
    </div>
    <div className="container">
        <div className="contactUs-left ">
    <img src="../..//contact-logo.png" alt="lgo" />
    <h5>Still have a Question? </h5>
    <p className='container'>Need help or have questions about SAYV? Use our chat feature for real-time assistance. Our support team is ready to provide you with quick and helpful answers to ensure a seamless experience.</p>
    <button id='chat'>Chat with us</button>
        </div>
        <div className="contactUs-right px-3 py-3">

        <Form className=''>
            <Row g-1 className='my-2'>

                <Col md>
                <Form.Group className="mb-3 md-3" controlId="formBasicEmail">
        <Form.Label><strong>Full Name</strong></Form.Label>
        <Form.Control type="email" placeholder="Enter full name" className='rounded-pill' />
        
        
      </Form.Group>
                
                </Col>
                <Col md>
                <Form.Group className="mb-3 md-3" controlId="formBasicEmail">
        <Form.Label><strong>Email</strong></Form.Label>
        <Form.Control type="email" placeholder="Enter email" className='rounded-pill' />
        
        
      </Form.Group>
                
                </Col>
            </Row>
            <Row g-1 className='my-2' >

<Col md>
<Form.Group className="mb-3 md-3" controlId="formBasicEmail">
<Form.Label><strong>Phone</strong></Form.Label>
<Form.Control type="email" placeholder="Enter Phone"  className='rounded-pill'/>


</Form.Group>

</Col>
<Col md>
<Form.Group className="mb-3 md-3" controlId="formBasicEmail">
<Form.Label><strong>Company (optional)</strong></Form.Label>
<Form.Control type="email" placeholder="yourcompany.com" className='rounded-pill'/>


</Form.Group>

</Col>
</Row>
      <Row>
        <Col>
        <Form.Group className="mb-3 md-3" controlId="formBasicEmail">
<Form.Label><strong>Message</strong></Form.Label>
<InputGroup>
       
<Form.Control as="textarea" rows={4} className='' style={{borderRadius:'20px'}} placeholder='Briefly tell us about your project and your current goals. How can we help you?' />
      </InputGroup>


</Form.Group>
        </Col>
      </Row>

      
     <Row ><Col md>
     <Button variant="primary" type="submit"  id='sendMess'>
        Send Message
      </Button>
     </Col></Row>
    </Form>

        </div>
    </div>
    <div style={{height:'70px'}}></div>
   </div>
   <FAQ/>
   </>
  )
}

export default ContactUs