import React from 'react'
import Image from 'react-bootstrap/Image';
import '../styles/OueStory.css'
function OurStory() {
  return (
    <div className='ourStory-container'>
        <div style={{height:'150px'}}></div>
     <div className="container">

        <div className="ourStory-left">
        <Image className='w-40' src="../..//ourStory-left.png" rounded fluid />
        </div>
        <div className="ourStory-right">
  <button>Our story</button>
  <h4>Our Journey and Legacy</h4>
  <p>SAYV traces its beginnings to a small accounting practice, located in South Australia, over 60 years ago. Since then, the business has steadily grown and expanded its services to meet the ongoing and ever-changing needs of our clients. We are fortunate to have the combined 150 years of experience between its Founders and Directors translating to our clients having the focused benefits of these professionals and leading SAYV into the future.</p>
        </div>
     </div>
     <div style={{height:'150px'}}></div>

    </div>
  )
}

export default OurStory