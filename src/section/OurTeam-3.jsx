import React from 'react'
import '../styles/ourTeam.css'
import { Col, Row } from 'react-bootstrap'
import Cards2 from '../component/Cards2'
function OurTeam_3() {

    const data = [
        {
            title:'Vision',
            description:"Empowering individuals to achieve financial freedom and live their best lives is at the heart of SAYV's vision. We envision a future where every person has the knowledge, tools, and confidence to take control of their finances effectively. By promoting financial literacy, providing innovative solutions, and fostering a supportive community, SAYV aims to empower individuals to make informed decisions, achieve their financial goals, and ultimately lead fulfilling lives.",
             bgimage:'https://images.squarespace-cdn.com/content/v1/583ed05c59cc68a8c3e45c0f/1482074282081-KQBCRLEWPLWTJKWBCR4X/vision.png?format=750w'
        },
        {
            title:'Mision',
            description:"At SAYV, our mission is to revolutionise personal finance with innovative tools and expert guidance, empowering individuals to control their financial future and save smarter. We are committed to delivering exceptional value to clients, fostering team growth, and positively impacting communities. Through professionalism, enthusiasm, empathy, teamwork, initiative, and family values, we aim to create Clarity-For-Life and help clients achieve long-term financial security and fulfillment.",
             bgimage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRItyPf85WRrH5LJr2w9UZ7G5qu-38pgyIunA&s'
        }
    ]
  return (
    <div className='ourTeam-3-container'>
        <div style={{height:'100px'}}></div>
 <div className="container">
    <div className="ourTeam-3-upper">
  <button>Our Team</button>
  <h4>Our Mission and Vision</h4>
    </div>
    <div className="ourTeam-3-lower">
    <Row md={2} sm={1} xs={1} lg={2} className='my-3'>
    {
  data.map(({title,description,bgimage})=>(
     <Col className='p-2' >
              <Cards2 title={title} discription={description}  bgimage={bgimage}/>

    </Col>
  ))}
 </Row>
    </div>
 </div>
 <div style={{height:'100px'}}></div>
    </div>
  )
}

export default OurTeam_3