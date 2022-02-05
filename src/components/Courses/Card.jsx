import React, { Component } from 'react'
import Courses from './Courses'


import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'

class Card extends Component{
    render()
{
    return(
    <div className="tittle">
        <h1>COURSES WE OFFER !!</h1>
   <div className="container-fluid d-flex justify-content-center">
    
       <div className="row">
    
           <div className="col-md-4">
          
               <Courses imgsrc={img1} title="HTML from Scratch!" href="https://www.udemy.com"/>
           </div>
           <div className="col-md-4">
           <Courses imgsrc={img2} title="PYTHON from Scratch!" href="https://www.udemy.com"/>
           </div>
           <div className="col-md-4">
           <Courses imgsrc={img3} title="CYBER SECURITY from Scratch!" href="https://www.udemy.com"/>
           </div>
          
       </div>
      
   </div>
   </div>
    );
}
}
export default Card;