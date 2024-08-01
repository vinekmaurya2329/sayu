import { Button, Image } from 'react-bootstrap';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate()
  return (
    <div className=''>

<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-container ">
      <Container>
        <Image src='../..//nav-logo.png' fluid width={'30px'}/>
        <Navbar.Brand href="#home" className='text-white'> $ayv</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-white' />
        <Navbar.Collapse id="responsive-navbar-nav"> 
          <Nav className="me-auto text-white" id='nav-links'>
            <Nav.Link onClick={()=>navigate('/')}  className='nav-links' style={{color:'#004AAD'}}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/about')}  className='text-white nav-links'>About us</Nav.Link>
            <Nav.Link onClick={()=>navigate('/ourService')}  className='text-white nav-links'>Our Services</Nav.Link>
            <Nav.Link onClick={()=>navigate('/blog')}  className='text-white nav-links'>Blog & Testimonials</Nav.Link>
            <Nav.Link onClick={()=>navigate('/home')}  className='text-white nav-links'>Contact us</Nav.Link>
         
         
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