
import emailjs from 'emailjs-com';
import './Contact.css';



const Contact =()=>{
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_r1cn8wc','template_0c36pg8',e.target,
        "user_tDoiwehnDL0ROymFteK5S")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    

    return(
<div className="container">
    
    <h1 style={{marginTop:"25px",
textAlign:"center"}}>Contact Us </h1>
    <form className="row" style={{margin:"25px 85px 75px 100px"}}
    onSubmit={sendEmail}>
        <div className="col-8 form-group pt-2 mx-auto">
     <input type="text"  className="form-control" placeholder="Name" name="name" />
     </div>
     <div className="col-8 form-group pt-2 mx-auto">
     <input type="email" className="form-control" placeholder="Email Address" name="email" />
     </div>
     <div className="col-8 form-group pt-2 mx-auto">
     <input type="text" className="form-control" placeholder="Subject" name="subject" />
     </div>
     <div className="col-8 form-group pt-2 mx-auto">
         <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
     </div>
     <div className="col-8 form-group pt-2 mx-auto">
     <input type="submit" value="Send" className="form-control btn btn-primary"
     
      />
    
      </div>
    
    
    </form>
   
</div>

    )
}
export default Contact