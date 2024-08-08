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

<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-container mt-3 ">
      <Container >
      
        <Navbar.Brand onClick={()=>navigate('/')} className='text-white'id='Sayv-logo' >  <Image src='../..//nav-logo.png' fluid width={'30px'}/> $ayv</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-white' />
        <Navbar.Collapse id="responsive-navbar-nav"> 
          <Nav className="me-auto text-white" id='nav-links'>
            <Nav.Link onClick={()=>navigate('/')}  className='nav-links mx-4' style={{color:'#004AAD'}}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/about')}  className='text-white nav-links mx-4'>About us</Nav.Link>
            <Nav.Link onClick={()=>navigate('/ourService')}  className='text-white nav-links mx-4'>Our Services</Nav.Link>
            <Nav.Link onClick={()=>navigate('/blog')}  className='text-white nav-links mx-4'>Blog & Testimonials</Nav.Link>
            <Nav.Link onClick={()=>navigate('/contactUs')}  className='text-white nav-links mx-4'>Contact us</Nav.Link>
         
            <Button className='scan-btn mx-5'>Scan to get application</Button>
          </Nav>
          {/* <Nav>
            <Button className='scan-btn'>Scan to get application</Button>
          </Nav> */}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

 
    </div>
  )
}

export default NavBar