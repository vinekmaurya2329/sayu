import React from 'react'
import '../styles/about.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from '../component/Card'
import Container from 'react-bootstrap/Container';
function About() {

    const data = [
        {
            title:'Insurance Factors',
            description:'5 Factors that may affect your car insurance premium',
            img:'https://s3-alpha-sig.figma.com/img/3d13/ef34/245eb331df3773fa05fbe4f36270a176?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jKroOGKQSTrgWoN3Wzo1ydvO6YUQQ4ryVQPdoAe6xIO35pbThzUVuDln~DPSyHeI2i8OimbNKyc~UKQthOoOItDkxcbymkHWj0mJvNhFidYncI7jow8VpguQStTlJRGr3NgHqRFZPwAM7WoJEnS8HxYvXGD0QlFMsa8UrgsgHzPAryVNQs23VlRrp~caBOY9CBzNenUB~3m2m6wOYEttNfViCArTJURmYodCmoOvl5x0EJeiIcni7QnxVkssOCSRWzzRY-nch4TssFZSeJMu9r7iFgQ1LZC-oVvpeLgJbWukL320Z6FUp~K6KG26xdFOJAwx4wonpgZvCi8O7Z2zJg__'
        },
        {
            title:'70 Cost-Saving Tips',
            description:'70 cost of living saving tips that can positively impact your weekly savings',
            img:'https://s3-alpha-sig.figma.com/img/3d13/ef34/245eb331df3773fa05fbe4f36270a176?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jKroOGKQSTrgWoN3Wzo1ydvO6YUQQ4ryVQPdoAe6xIO35pbThzUVuDln~DPSyHeI2i8OimbNKyc~UKQthOoOItDkxcbymkHWj0mJvNhFidYncI7jow8VpguQStTlJRGr3NgHqRFZPwAM7WoJEnS8HxYvXGD0QlFMsa8UrgsgHzPAryVNQs23VlRrp~caBOY9CBzNenUB~3m2m6wOYEttNfViCArTJURmYodCmoOvl5x0EJeiIcni7QnxVkssOCSRWzzRY-nch4TssFZSeJMu9r7iFgQ1LZC-oVvpeLgJbWukL320Z6FUp~K6KG26xdFOJAwx4wonpgZvCi8O7Z2zJg__' 
        },
        {
            title:'Thrifty Healthy Meals',
            description:'Healthy menu plans that save $’000’s at the super market each year',
            img:'https://s3-alpha-sig.figma.com/img/3d13/ef34/245eb331df3773fa05fbe4f36270a176?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jKroOGKQSTrgWoN3Wzo1ydvO6YUQQ4ryVQPdoAe6xIO35pbThzUVuDln~DPSyHeI2i8OimbNKyc~UKQthOoOItDkxcbymkHWj0mJvNhFidYncI7jow8VpguQStTlJRGr3NgHqRFZPwAM7WoJEnS8HxYvXGD0QlFMsa8UrgsgHzPAryVNQs23VlRrp~caBOY9CBzNenUB~3m2m6wOYEttNfViCArTJURmYodCmoOvl5x0EJeiIcni7QnxVkssOCSRWzzRY-nch4TssFZSeJMu9r7iFgQ1LZC-oVvpeLgJbWukL320Z6FUp~K6KG26xdFOJAwx4wonpgZvCi8O7Z2zJg__' 
        }
    ]
  return (
    
    <div id='about-container'>
        <div className="container about-cont">
    <div className="about-uper">
        <div className="blank"></div>
   <button>About us</button>
     <h3>SAYV™ is a Personal Financial Management (“PFM”) </h3>
     <h3>application for desktop, iOS and Android systems</h3>
     <p>Compared with the many financial
budgeting app products currently available
in the marketplace place today, SAYV
differentiates itself from the others by
combining budgeting and financial
monitoring outputs with an established
database of money saving and money
generating ideas, tips and suggestions
which will allow you to not only monitor
your personal finances but simultaneously
improve the way you can save money
while controlling the cost of living and
working towards an improved lifestyle.
SAYV helps you to          become a smarter
saver.</p>
    </div>
   <div className="about-lower">
 {
        data.map(({title,description,img})=>{
            return  <Cards title={title} description={description} img={img}/>
           

        })
      }
   </div>
   <div className="blank"></div>
     
   </div>
    </div>
  )
}

export default About