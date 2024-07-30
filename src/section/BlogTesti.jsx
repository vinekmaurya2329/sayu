import React from 'react'
import '../styles/blogTesti.css'
import NavBar from '../component/Navbar'
import Blogs from './Blogs'
function BlogTesti() {
  return (
    <>
    <div className='blogTesti-container'>
        <div style={{height:'100px'}}></div>
        <div className="container">
            <div className="blogTesti-upper">
                <button>About us</button>
                <h4>Blog & Testimonial</h4>
                <p>Explore expert blogs for financial tips and strategies, and read testimonials from SAYV users who have transformed their financial lives.</p>
            </div>
        <div style={{height:'100px'}}></div>
            
        </div>
       
    </div>
    <Blogs/>
    </>
  )
}

export default BlogTesti