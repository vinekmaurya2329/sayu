import React from 'react'
import '../styles/YourSayv.css'
import Cards2 from '../component/Cards2'
import { Col, Row } from 'react-bootstrap'
function YourSayv() {
    const data = [
        {
            title:'Comprehensive Financial Management',
            discription:'SAYV offers an all-in-one solution to track your expenses, set savings goals, and manage your budget effectively. With our intuitive tools, you can gain a complete overview of your financial health.',
            logo:'../..//yourSavy-1.png',
            bgimage:'https://static.vecteezy.com/system/resources/thumbnails/033/129/572/small/business-deal-partnership-handshake-innovation-corporate-business-concept-ai-generative-photo.jpg'
        },
        {
            title:'Personalised Recommendations',
            discription:'Receive budgeting tips, suggestions and recommendations to help you make smarter saving and cost of living decisions to help you achieve your financial goals. SAYV helps you to analyse your financial situation to provide actionable insights.',
            logo:'../..//yourSavy-2.png',
            bgimage:'https://static.vecteezy.com/system/resources/thumbnails/033/129/572/small/business-deal-partnership-handshake-innovation-corporate-business-concept-ai-generative-photo.jpg'

        },
        {
            title:'Secure Account Integration',
            discription:'Easily and securely link your bank accounts to SAYV for seamless financial management. Your data is protected with industry-standard encryption to ensure your privacy and security.',
            logo:'../..//yourSavy-3.png',
            bgimage:'https://static.vecteezy.com/system/resources/thumbnails/033/129/572/small/business-deal-partnership-handshake-innovation-corporate-business-concept-ai-generative-photo.jpg'

        },
        {
            title:'Detailed Financial Reports',
            discription:"Generate and customise financial reports to monitor your progress and make informed decisions. SAYV's reports are designed to be clear and easy to understand, helping you stay on top of your finances.",
            logo:'../..//yourSavy-4.png',
            bgimage:'https://static.vecteezy.com/system/resources/thumbnails/033/129/572/small/business-deal-partnership-handshake-innovation-corporate-business-concept-ai-generative-photo.jpg'

        },
        {
            title:'Real-Time Support',
            discription:'Have questions or need assistance? Our support team is always ready to help. Use our chat feature for instant support or contact us via email or phone for more detailed inquiries.',
            logo:'../..//yourSavy-5.png',
            bgimage:'https://static.vecteezy.com/system/resources/thumbnails/033/129/572/small/business-deal-partnership-handshake-innovation-corporate-business-concept-ai-generative-photo.jpg'

        },
        {
            title:'User-Friendly Experience',
            discription:'SAYV is available on desktop, laptop, iOS, and Android devices, ensuring you can manage your finances anytime, anywhere. Our user-friendly interface makes it easy to navigate and utilise all the features SAYV offers.',
            logo:'../..//yourSavy-6.png',
            bgimage:'https://i3.wp.com/cdn.sanity.io/images/xmpcmhrn/production/f363771ad3c072ec71f1ea5e8f3868d18de231a6-1200x800.jpg'

        }
    ]
  return (
    <div className='yourSayv-container'>
<div className="container">
   <div className="yourSayv-upper">
    <div style={{height:'100px'}}></div>
 <button>Your Sayv</button>
 <h3>What you can expect from the SAYV App</h3>
   </div>
   <div className="yourSayv-middle">
 <Row md={2} sm={1} xs={1} lg={3} className='my-3'>
    {
  data.map(({title,discription,logo,bgimage})=>(
     <Col className='p-2' >
              <Cards2 title={title} discription={discription} logo={logo} bgimage={bgimage}/>

    </Col>
  ))}
 </Row>
  
   </div>
   <div className="yourSayv-lower">
    <div style={{height:'50px'}}></div>
     <h4>Disclaimer:</h4>
     <p>The information provided by SAYV is for general informational purposes only and does not constitute financial product advice. It is not tailored to your specific financial circumstances. For personalised financial advice, please consult a qualified financial advisor.
     </p>
    <div style={{height:'100px'}}></div>
     
   </div>
</div>

    </div>
  )
}

export default YourSayv