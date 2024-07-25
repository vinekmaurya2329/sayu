import React from 'react'
 import '../styles/creditScore.css'
function CreditScore() {
  return (
    <div className='credit-score-container'>
  <div className="container">
   <div style={{height:'100px'}}></div>
    <div className="credit-score-left">
   <button>Credit score</button>
   <h4>Why is your Credit Score so important?</h4>
   <div className="note">
    <h6>NOTE for Software Development</h6>
    <p>Set up link to CREDITSAVVY for FREE credit score application process by</p>
    <p>user.<span>.Credit Savvy - get your free Credit Score</span></p>
   </div>
   <p>SAYV believes that knowing your credit score is important because banks and lenders use it to make financial decisions about you. Your credit score is a number calculated from your
credit file, which includes details like how often you apply for credit, the types of credit you use, your repayment history, and any negative information such as defaults or bankruptcies.

Lenders check your credit score to assess the risk of lending you money. A higher score means you are seen as a responsible borrower and can lead to better deals and savings.

If you're planning to apply for a credit card, mortgage, car loan, or any other credit product, checking your credit score first can help you understand your creditworthiness and the likelihood of your application being approved.</p>
    </div>
    <div className="credit-score-right">
 {/* <img src="https://www.myfooddata.com/printables/high-calorie-foods-to-avoid-printable.png" alt="img" /> */}
    </div>
  </div>
    <div style={{height:'100px'}}></div>
    </div>
  )
}

export default CreditScore