import React from 'react'
import '../styles/YourSayv.css'
import Cards2 from '../component/Cards2'
function YourSayv() {
    const data = [
        {
            title:'Comprehensive Financial Management',
            discription:'SAYV offers an all-in-one solution to track your expenses, set savings goals, and manage your budget effectively. With our intuitive tools, you can gain a complete overview of your financial health.',
            logo:'',
            bgimage:''
        },
        {
            title:'Personalised Recommendations',
            discription:'Receive budgeting tips, suggestions and recommendations to help you make smarter saving and cost of living decisions to help you achieve your financial goals. SAYV helps you to analyse your financial situation to provide actionable insights.',
            logo:'',
            bgimage:''
        },
        {
            title:'Secure Account Integration',
            discription:'Easily and securely link your bank accounts to SAYV for seamless financial management. Your data is protected with industry-standard encryption to ensure your privacy and security.',
            logo:'',
            bgimage:''
        },
        {
            title:'Detailed Financial Reports',
            discription:"Generate and customise financial reports to monitor your progress and make informed decisions. SAYV's reports are designed to be clear and easy to understand, helping you stay on top of your finances.",
            logo:'',
            bgimage:''
        },
        {
            title:'Real-Time Support',
            discription:'Have questions or need assistance? Our support team is always ready to help. Use our chat feature for instant support or contact us via email or phone for more detailed inquiries.',
            logo:'',
            bgimage:''
        },
        {
            title:'User-Friendly Experience',
            discription:'SAYV is available on desktop, laptop, iOS, and Android devices, ensuring you can manage your finances anytime, anywhere. Our user-friendly interface makes it easy to navigate and utilise all the features SAYV offers.',
            logo:'',
            bgimage:''
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
  {data.map(({title,discription,logo,bgimage})=>{
     return     <Cards2 title={title} discription={discription} logo={logo} bgimage={bgimage}/>
  })}
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