import React, { useState } from 'react';
import '../styles/FAQ.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function FAQ() {

    const [openIndex, setOpenIndex] = useState(null);
  const [rotate,setRotate] = useState(false)
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div>
<div className="FAQ-container">
    <div style={{height:'100px'}}></div>
    <div className="container">
        <div className="FAQ-left">
     <button>FAQ</button>
     <h4>Frequently Asked  <br/>Questions</h4>
     <p>Explore common questions about SAYV to find answers about managing finances, using our app on different devices, and optimizing your financial goals.</p>
        </div>


        <div className="FAQ-right">
       
        <div className="container-ques">
      
      
      <div className="faq">
       <div className='ques-btn'  onClick={() => toggleFaq(0)}>
       <button className="faq-question">
          What is your return policy?  
        </button>
       
        <span style={{marginLeft:'30%'}} > { openIndex === 0 && rotate == false ?<IoIosArrowUp /> : <IoIosArrowDown/> }  </span>
       </div>
        <div className={`faq-answer ${openIndex === 0 ? 'show' : ''}`}>
          <p>Our return policy allows returns within 30 days of purchase with a valid receipt. The product must be in its original condition.</p>
        </div>
      </div>
      
      <div className="faq">
      <div  className='ques-btn'  onClick={() => toggleFaq(1)}>
      <button className="faq-question">
          Do you offer international shipping?    
        </button> 
       
        <span style={{marginLeft:'30%'}}> { openIndex === 1 && rotate == false ?<IoIosArrowUp /> : <IoIosArrowDown/> }   </span>
      </div>
        <div className={`faq-answer ${openIndex === 1 ? 'show' : ''}`}>
          <p>Yes, we offer international shipping to over 50 countries. Shipping charges and delivery times may vary based on location.</p>
        </div>
      </div>
      
      <div className="faq">
       <div  className='ques-btn' onClick={() => toggleFaq(2)}>
       <button className="faq-question" >
          How can I track my order? 
        </button>
        <span style={{marginLeft:'30%'}}> { openIndex === 2 && rotate == false ?<IoIosArrowUp /> : <IoIosArrowDown/> }   </span>
       </div>
        <div className={`faq-answer ${openIndex === 2 ? 'show' : ''}`}>
          <p>You can track your order using the tracking number provided in your order confirmation email. Visit our tracking page and enter the tracking number.</p>
        </div>
      </div>
      
      <div className="faq">
       <div  className='ques-btn' onClick={() => toggleFaq(3)}>
       <button className="faq-question" >
          What payment methods do you accept? 
        </button>
        <span style={{marginLeft:'30%'}}> { openIndex ===3 && rotate == false ?<IoIosArrowUp /> : <IoIosArrowDown/> }   </span>
       </div>
        <div className={`faq-answer ${openIndex === 3 ? 'show' : ''}`}>
          <p>We accept various payment methods including credit/debit cards, PayPal, and Apple Pay.</p>
        </div>
      </div>
    </div>

        </div>
    </div>
</div>

    </div>
  )
}

export default FAQ