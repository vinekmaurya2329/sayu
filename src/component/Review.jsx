import React from 'react'
import '../styles/Review.css'
import Cards2 from './Cards2'
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";

function Review() {
const data =[
    {
        name:'dummy',
        description:'Have been relying on SAYV for years sometime,initially to find help with my mortgage payments andthis helped me talk confidently either to new lenders orto negotiate better rates with existing lenders.',
        image:'https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png'
    },
    {
        name:'dummy',
        description:'Have been relying on SAYV for years sometime,initially to find help with my mortgage payments andthis helped me talk confidently either to new lenders orto negotiate better rates with existing lenders.',
        image:'https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png'
    },
    {
        name:'dummy',
        description:'Have been relying on SAYV for years sometime,initially to find help with my mortgage payments andthis helped me talk confidently either to new lenders orto negotiate better rates with existing lenders.',
        image:'https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png'
    }
]
let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
   

  return (
    <>
      
    <div className='review-container'>
       
<div className="container">
    <div className="review-upper">
        <div style={{height:'100px'}}></div>
   <button>Review</button>
   <h4>What our App users are saying & asking</h4>
   <p>Discover how SAYV has transformed the financial lives of our users. Read their reviews and see how our app has helped them save money, manage their budgets, and achieve their financial goals. Join our satisfied users and start your journey to better financial health today!</p>
    
    </div>
    <div className="review-lower">
   
    {/* <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div> */}
   

   {data.map(({name,description,image})=>{
     return <Cards2 title={name}  discription={description} logo={image} />
   })}
    </div>
    <div className="review-btn-container">
    <button className='more-review-btn'>See more review</button>
    
    </div>
    <div style={{height:'150px'}}></div>
</div>

    </div>
    </>
  )
}

export default Review