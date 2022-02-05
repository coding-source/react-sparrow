import React from 'react'

import './card-style.css'
const Courses=props=>{
    return(
 
<div className="card text-center">
   
<div className="overflow">

    <img src={props.imgsrc} alt="1" className="card-img-top" />
</div>
<div className="card-body text-dark">
    
    

    <h4 className="card-title">
    {props.title}
    </h4>
    <p className="card-text text-secondary">
        Join  us with Feeble Knowledge and Flourish out with the Maximum Knowledge in Html in a interatcive manner <br />NO PREREQUISITE NEEDED!!</p>
        <a href={props.href} className="btn btn-outline-success">Enroll Now</a>
</div>

</div>
 

    );
}

export default Courses;
