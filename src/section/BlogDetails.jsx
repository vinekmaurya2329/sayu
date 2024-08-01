import React from 'react'
import '../styles/BlogDetails.css'
import Feature from './Feature'
import { Col, Image, Row } from 'react-bootstrap'
import BlogCard from '../component/BlogCard'
function BlogDetails() {
  const data =  [1,2,3,4,5,6]
  return (
    <>
    <div className='blogDetail-container'>
   <div className="container">
    <div style={{height:'50px'}}></div>
     <button>Blog •  Details page</button>
     <h4>UX review presentations</h4>
     <p>Olivia Rhye • 1 Jan 2023</p>
   </div>
    </div>
   <div className='bg-white'>
   <div className="big-feature container ">
     <Image src='../..//big-blog.png' fluid className=''/>
    <div className='p-conatiner'>
      <p>Lorem ipsum dolor sit amet consectetur. Risus quam aenean et hac nisl. Eget sit vitae feugiat egestas. Commodo cum elementum tortor nulla dictumst. Nullam enim fames risus ultricies. Auctor nulla semper integer integer malesuada egestas risus. Diam quis sed quis lobortis in. Purus nisi libero tellus a eu mollis integer auctor suspendisse. Elit ac molestie tellus cursus phasellus erat pulvinar. Nunc lacus elementum nulla nisi dis. Placerat lacinia at sapien blandit faucibus arcu et. Quam dolor integer enim tincidunt vel diam enim maecenas neque. Vitae felis eget eget ut tempor duis. Egestas egestas faucibus auctor non sollicitudin tincidunt tincidunt.</p>
      <p>Vulputate vitae tempus pellentesque consectetur neque dignissim eros eget. Senectus elit et suspendisse mauris. Lobortis vulputate ipsum aliquet augue. Odio egestas scelerisque et urna. Vitae feugiat ullamcorper orci justo. Integer aenean mauris viverra viverra consequat parturient. Gravida lorem quisque sed id justo urna vivamus. Ultrices nulla ut sed sed bibendum faucibus pharetra purus. Massa condimentum eget nunc sed. Tristique lectus morbi tincidunt amet lectus turpis neque laoreet in.</p>
      <p>Lorem volutpat elit morbi molestie. Iaculis vestibulum sit viverra sed fermentum iaculis elit. Laoreet habitant duis sit bibendum eu aliquet vitae vestibulum non. Consequat fringilla blandit fames potenti massa in molestie senectus egestas. Mattis nibh id semper sapien dignissim sed in. In viverra aliquam id neque facilisis laoreet enim at ultricies. Molestie justo sit convallis rhoncus bibendum. Dignissim commodo lorem aenean risus quis at amet. Placerat ut consectetur porttitor nibh amet. Faucibus accumsan enim euismod aliquam. Nibh leo arcu sit pellentesque proin dolor.</p>
      <p>Aliquet id a adipiscing volutpat pretium. Eu duis cras interdum integer ac facilisis.</p>
    </div>
    </div>
    <div className="more-blogs container">
      <div style={{height:'70px'}}></div>
       <h4 style={{color:'#1A527E',textAlign:'center'}}>Explore more blogs</h4>
         <div className="more-blog-div">
         {
            data.map(()=>{
               return <BlogCard/>
            })
          }
         </div>
    </div>
    <div style={{height:'50px'}}> </div>
   </div>
   

    </>
  )
}

export default BlogDetails