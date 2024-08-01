import React from 'react'
import '../styles/blogTesti.css'
import BlogCard from '../component/BlogCard'
import { Col, Row } from 'react-bootstrap'
import Review from '../component/Review'
import Footer from '../component/Footer'
import { Link ,useNavigate } from "react-router-dom";

function Blogs() {
    const navigate = useNavigate()
    const data = [
        {
            title:'UX review presentations',
            image:'../..//blog.png',
            description:'How do you create compelling presentations that wow your colleagues and impress your managers?'
        },
        {
            title:'UX review presentations',
            image:'../..//blog.png',
            description:'How do you create compelling presentations that wow your colleagues and impress your managers?'
        }
    ]
  return (
    
    <div className='blogs-container'>
        <div style={{height:'100px'}}></div>

 <div className="container">
     <div className="blogs-upper">
        <button>blogs</button>
        <h4>Blogs: Stay Informed and Inspired. What you <br /> can expect from the SAYV App</h4>
       
     </div>
     <div className="blogs-middle">
     <h5 style={{textAlign:'center'}}>Recent blogs</h5>
    <Row md={1} xl={2} xs={1} sm={1}>
    {
        data.map(({title,image,description})=>(
  <Col>
  <BlogCard  title={title} description={description} image={image}/>
  </Col>
        ) )
     }
    </Row>
     </div>
     <div className="blogs-lower">
        <h4 style={{textAlign:'center'}} className='mt-2'>All Blogs</h4>
       
           
           <div className='big-card mt-5' > <BlogCard /></div>
            <Row xl={2} md={1} sm={1} xs={1} className='mt-3'>
               
               { data.map((item)=>(
                    <Col><BlogCard/></Col>
                ))}
               
            </Row>
           
         <button className=' rounded-5 border-1 text-white mt-4' style={{backgroundColor:'#004AAD',padding:'4px 10px',textAlign:'center', position:'relative',left:'45%'}} onClick={()=>navigate('/blogDetails')}> See all blogs </button>
     </div>
 </div>
 <Review/>
 
    </div>
  )
}

export default Blogs