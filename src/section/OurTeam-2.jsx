import React from 'react'
import '../styles/ourTeam.css'
import { Col, Row } from 'react-bootstrap'
import Cards from '../component/Card'
function OurTeam_2() {
    const data = [
        {
         title:'some title',
         description:'We take pride in delivering our best products to our clients. ',

         image:'../..//value-1.png'
        },
        {
            title:'some title',
            description:'We take pride in delivering our best products to our clients. ',
             image:'../..//value-2.png'
           },
           {
            title:'some title',
            description:'We take pride in delivering our best products to our clients. ',

            image:'../..//value-3.png'
           },
           {
            title:'some title',
            description:'We take pride in delivering our best products to our clients. ',

             image:'../..//value-4.png'
           },
           {
            title:'some title',
            description:'We take pride in delivering our best products to our clients. ',

             image:'../..//value-5.png'
           },
           {
            title:'some title',
            description:'We take pride in delivering our best products to our clients. ',

             image:'../..//value-6.png'
           },
    ]
  return (
    <div className='ourTeam-2-container' style={{backgroundColor:'#FFFFFF'}}>
        <div style={{height:'100px'}}></div>
  <div className="container">
    <div className="ourTeam-2-upper">
        <button>Our team</button>
        <h4 style={{color:'#00275B'}}>Our Values: The Heart of SAYV</h4>
    </div>
    <div className="ourTeam-2-lower">
    <Row md={2} sm={1} xs={1} lg={3} className='my-3'>
    {
  data.map(({title,description,image})=>(
     <Col className='p-2' >
              <Cards title={title} description={description}  img={image}/>

    </Col>
  ))}
 </Row>
    </div>
  </div>
         <div style={{height:'100px'}}></div>
    </div>
  )
}

export default OurTeam_2