import React, { useRef } from "react";
import Slider from "react-slick";
import '../styles/ourTeam.css'
import Cards from './Card';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
function OurTeam() {

    const data = [
        {
            name:'vinek maurya',
            title:'full stack',
            image:'https://static.vecteezy.com/system/resources/thumbnails/034/598/493/small/ai-generative-happy-business-man-in-a-suit-white-background-photo.jpg'
        },
        {
            name:'siddhart gore',
            title:'front end ',
            image:'https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

        },
        {
            name:'shobit kumar',
            title:'back end ',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLxAmpalwU30owGw1nw3nL-Jlf1OnR7d4oHQ&s'

        },
        {
            name:'kishore',
            title:'UI Designer  ',
            image:'https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

        },
    ]
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
    const settings = {
      dots: false,
      infinite: true,
      speed: 900,
      // centerMode:true,
      slidesToShow: 4,
      slidesToScroll: 1,
      // focusOnSelect: true,
      swipeToSlide: true,
      arrows:false,
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
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
          breakpoint: 933,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 630,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <div className='ourTeam-container'>
        <div style={{height:'100px'}}></div>
 <div className="container">
    <div className="ourTeam-upper">
  <button>Our Team</button>
  <h4>Our Core Values: The Foundation of SAYV</h4>
  <p>Our highly motivated and qualified team ensure that our clients’ financial goals are secured, by delivering a quality software application which provides valuable results, working with smart, value-driven professionals, thriving in an environment that is positive and enthusiastic, embracing new ideas and being innovative and proactive. Enjoying a challenge SAYV is dedicated
to creating opportunities for our people, through providing an outstanding work environment, involving them in stimulating projects and encouraging lifelong learning. We offer flexibility to promote a healthy life balance and foster a supportive, professional atmosphere where our
 people can grow and develop their careers. We encourage our team to be the best they can be by balancing hard work with good humour and a sense of fun, family and community. </p>
    </div>

    <div className="ourTeam-lower">

    <div className="slider-container" >
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >

{
          data.map(({name,title,image},i)=>{
                 return  <div key={i}> <Cards title={name} description={title} img={image}/> </div>
          })
               }
       
         
       
      </Slider>
      <div style={{ textAlign: "center" }} className="btn-conatiner">
        <button className="button" onClick={previous}>
        <GrFormPrevious />
        </button>
        <button className="button" onClick={next}>
        <MdNavigateNext />
        </button>
      </div>
    </div>
             
    </div>
 </div>
   <div style={{height:'150px'}}></div>
    </div>
  )
}

export default OurTeam