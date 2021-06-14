import React,{useState} from 'react'
import '../../src/app.css'
import fb from '../images/icons/fb.png'
import google from '../images/icons/google.png'
import insta from '../images/icons/insta.png'
import {Form,Button,Modal} from 'react-bootstrap'
import axios from 'axios'
const Contact = () => {
  const [Name, setName] = useState('')
  const [Email,setEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const [Message, setMessage] = useState('')
// /function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => {

    setShow(false);
    
  }
 

  const submitHandler=(e)=>{
    e.preventDefault();
    const contactData={
      Name:Name,
      Email:Email,
      Phone:Phone,
      Message:Message
      
    }
    
    axios.post('http://localhost:7000/contactdb/addContact/',contactData).then(
      res=>{
        console.log("Your contact is goes to the admin")
      }
    );
    
  }

  const handleShow = () => {
    if(Name!=='' && Email!=='' && Message!=='')
    setShow(true);
  }

    return (
      <div>
           <div className='mt-5 mb-5 pb-4 pt-4 text-center col-md-11' style={{'float':'left'}}>
       
           <div className='p-3 contact offset-md-3  col-md-6'>
           <p className='p-3 m-3 text-light'>If you want to contact us then you send your message or call us and then we will respond to you as soon as possible.</p>
   
           <Form onSubmit={submitHandler} className='offset-md-2 contactform col-md-8'>
  
      <h1 className ='p-4 mt-3 text-center text-danger' style={{'textDecoration':'underline wavy 2px'}} >Contact Us ...</h1>
     
      <Form.Group>
         <Form.Control type="text" placeholder="Enter Your Name" onChange={e=>setName(e.target.value)} required/>
         </Form.Group>
      <Form.Group>
    <Form.Control type="email" placeholder="Enter Your Email Address" onChange={e=>setEmail(e.target.value)} required/>
  </Form.Group>
  <Form.Group>
         <Form.Control type="text" placeholder="Enter Contact Number" onChange={e=>setPhone(e.target.value)} required/>
         </Form.Group>
  <Form.Group>
    
    <Form.Control as="textarea" rows={3} placeholder='Enter Your Message' onChange={e=>setMessage(e.target.value)} required/>
  </Form.Group>
  <Button className='btn btn-outline-danger text-bolder mb-5'  onClick={handleShow} style={{'font-size':'20px'}} variant='light ' type='submit'>Contact  Now</Button>
</Form>
       
<p className='mt-4'>
             	

               <span className='text-light m-2' style={{'fontSize':'20px'}}>Contact Us On : <a className='text-light' href="tel:7239053850">7239053850</a></span>
    <span className='m-2'><a href='https://accounts.google.com/signin/v2/identifier?hl=en&flowName=GlifWebSignIn&flowEntry=AddSession' target='blank'><img src={google}alt='not found'  style={{'width':'30px','height':'30px','borderRadius':'50%'}}/></a></span>
    <span className='m-2'><a href='https://www.facebook.com/' target='blank'><img src={fb} alt='not found' style={{'width':'30px','height':'30px','borderRadius':'50%'}}/></a></span>
    <span className='m-2'><a href='https://www.instagram.com/accounts/login/'  target='blank'><img src={insta} alt='not found'  style={{'width':'30px','height':'30px','borderRadius':'50%'}}/></a></span>
  </p>
           </div>
          
       </div>
        <div className='p-3 bg-info col-md-12' style={{'float':'left'}}>
        <iframe style={{'width':'100%'}} title='hello' height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Deoria+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href="https://maps-website.com/">add google map</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=c0a4c8429ba64e16c2c2bbbcd0d4c53c6c31180b'></script>
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Reached</Modal.Title>
        </Modal.Header>
        <Modal.Body>Our Team Contact will you Soon ... Thank you !!!</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Done
          </Button>
         
        </Modal.Footer>
      </Modal>
      </div>
    )
}

export default Contact
