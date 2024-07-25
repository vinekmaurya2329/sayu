import React from 'react'
import '../styles/SmartSaver.css'
function SmartSaver() {
  return (
    <div className='smart-saver-container '>
        <div className='container'>
        <div className="smart-saver-upper-container">
            <div className="blank"></div>
   <button>Smart saver</button>
   <h3>SAYV™ is a Personal Financial Management (“PFM”) <br /> application for desktop, iOS and Android systems </h3>
   {/* <h3>application for desktop, iOS and Android systems</h3> */}
   <p>Available on desktop, laptop, iOS, and Android. SAYV offers tailored money-saving and cost-of-living benefits across various daily life categories. It captures your personal info, assesses your financial and lifestyle position, and makes budget and lifestyle recommendations. Monitor and adjust your outcomes easily.</p>
        </div>
        <div className="smart-saver-middle-container">
            <div className="middle-left">
                <div className='' style={{height:'80px'}}></div>
  <h5>SAYV: Your Interactive Financial Companion</h5>
  <p>Available on desktop, laptop, iOS, and Android. SAYV tailors money-saving tips, assesses your finances, and offers budget recommendations. Easily monitor and adjust your outcomes.</p>
          <h5>Create Custom Dashboards and Reports</h5>
          <p>Create personalised dashboards and reports to focus on the financial details that matter most to you.</p>
            </div>
            <div className="middle-right">
                  <img src="../..//Sayv-image-1.png" alt="" />
            </div>
        </div>
        <div className="smart-saver-lower-container">
                 <img src="../..//Sayv-image-2.png" alt="" />
        </div>
       
  <div className="smart-saver-bottom">
  <h4>Block out the noise and focus on what truly matters. Tailor your experience by creating customised dashboards and reports, so you can hone in on the financial details relevant to you right now. Save the rest for later.</h4>
 <p>SAYV functions as a fully interactive app capable of running via its website on desktop or laptop computer and/or mobile iOS or Android device. It features a tailored database of money saving and cost of living benefits across a comprehensive range of daily life categories with the capability of interacting with the PFM which initiates by capturing your personal information, assessing your financial and lifestyle position, making conservative recommendations regarding a future budget & lifestyle plan and then measuring, monitoring & adjusting the actual ongoing outcomes</p>
  <div style={{height:'80px'}}></div>
  </div>
        </div>
    </div>
  )
}

export default SmartSaver