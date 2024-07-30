import React from 'react'
import '../styles/BlogCard.css'

function BlogCard({title,description,image}) {
  return (
    <div className='blogCard-container'>
  <div className="container">
    <div className="blog-cards-upper">
     <img src="../..//blog.png" alt="img" />
       
    </div>
    <div className="blog-cards-lower">
    <h6>Olivia Rhye • 1 Jan 2023</h6>
        <h4>UX review presentations</h4>
        <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
    </div>
  </div>
    </div>
  )
}

export default BlogCard