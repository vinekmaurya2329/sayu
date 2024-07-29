import { Button } from 'react-bootstrap';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Navbar.css'
function NavBar() {
  return (
    <div className=''>

<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-container ">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>$ayv</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-white' />
        <Navbar.Collapse id="responsive-navbar-nav"> 
          <Nav className="me-auto text-white" id='nav-links'>
            <Nav.Link href="/" className='' style={{color:'#004AAD'}}>Home</Nav.Link>
            <Nav.Link href="/about"  className='text-white'>About us</Nav.Link>
            <Nav.Link href='/ourService'  className='text-white'>Our Services</Nav.Link>
            <Nav.Link href='#ourServices'  className='text-white'>Blog & Testimonials</Nav.Link>
            <Nav.Link href='#ourServices'  className='text-white'>Contact us</Nav.Link>
         
         
          </Nav>
          <Nav>
            <Button className='scan-btn'>Scan to get application</Button>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

 
    </div>
  )
}

export default NavBar