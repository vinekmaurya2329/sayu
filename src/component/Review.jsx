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
        name:'joy',
        description:'Have been relying on SAYV for years sometime,initially to find help with my mortgage payments andthis helped me talk confidently either to new lenders orto negotiate better rates with existing lenders.',
        image:'https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png'
    },
    {
        name:'tony',
        description:'Have been relying on SAYV for years sometime,initially to find help with my mortgage payments andthis helped me talk confidently either to new lenders orto negotiate better rates with existing lenders.',
        image:'https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png'
    },
    {
        name:'jay',
        description:'Have been relying on SAYV for years sometime,initially to find help with my mortgage payments andthis helped me talk confidently either to new lenders orto negotiate better rates with existing lenders.',
        image:'https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png'
    }, {
        name:'yash',
        description:'Have been relying on SAYV for years sometime,initially to find help with my mortgage payments andthis helped me talk confidently either to new lenders orto negotiate better rates with existing lenders.',
        image:'https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png'
    }, {
        name:'nobita',
        description:'Have been relying on SAYV for years sometime,initially to find help with my mortgage payments andthis helped me talk confidently either to new lenders orto negotiate better rates with existing lenders.',
        image:'https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png'
    }, {
        name:'Tom',
        description:'Have been relying on SAYV for years sometime,initially to find help with my mortgage payments andthis helped me talk confidently either to new lenders orto negotiate better rates with existing lenders.',
        image:'https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png'
    },
]
let settings = {
    className: "center",
    dots: false,
    infinite: true,
    speed: 200,
    centerMode: true,
    slidesToShow:3,
    centerPadding: "0px",
    slidesToScroll: 1,
    arrows:false,
   
    // adaptiveHeight: true,
    
    // variableWidth: true,
    initialSlide: 0,
    focusOnSelect: true,
    swipeToSlide: true,
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
        breakpoint: 770,
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
   
    <div className="slider-container " >
      <Slider {...settings}>
       
          {data.map(({name,description,image})=>{
     return  <div className='' > <Cards2 title={name}  discription={description} logo={image} /></div>
   })}
        
      </Slider>
    </div>
   

   {/* {data.map(({name,description,image})=>{
     return <Cards2 title={name}  discription={description} logo={image} />
   })} */}
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