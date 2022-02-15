import React,{useState} from 'react'
// import {Form,Button} from 'react-bootstrap'
import axios from 'axios';
import {Form,Button,Modal} from 'react-bootstrap';
import '../app.css'
const createBrowserHistory=require("history").createBrowserHistory;
const history = createBrowserHistory();
const Admission = () => {
    const [Name, setName] = useState('');
    const [F_Name, setF_Name] = useState('')
    const [Address, setAddress] = useState('')
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Course, setCourse] = useState('')
    const [File, setFile] = useState('')
    const [show, setShow] = useState(false);
// -----------------------------------------------------------
    const submitHandler=(e)=>{
        e.preventDefault();
        
        const stuData={
            Name:Name,
            F_Name:F_Name,
            Address:Address,
            Email:Email,
            Phone:Phone,
            Course:Course
        }
        
    axios.post("http://localhost:7000/studentdb/addStudent",stuData).then((res)=>{
        console.log("Success:", res);
        handleShow();
        history.push('/showStudent');
    });
    }
    const submitFileHandler=(e)=>{
      e.preventDefault();
      
      const stuData1={
          File:File
      }
      
  axios.post("http://localhost:7000/studentdb/upload",stuData1).then((res)=>{
      console.log("Success:", res);
      handleShow();
      history.push('/showStudent');
  });
  }
    
  // For Modal Code
  // -----------------------------------------------------
    const handleClose = () => {
  
      setShow(false);
      
    }
   
    const handleShow = () => {
      setShow(true);
    }
  // -------------------------------------------------------------
    return (
        <div className='mt-5'>
           <div className='mt-5 col-md-6 offset-md-3 py-5 bg-info'>
       
          <Form className='bg-light p-3 admission-form' onSubmit={submitHandler}>
                <div className='bg-success pt-4 text-center  border border-success text-light'><h2>Admission Form</h2></div>
 <div className= 'border border-success'> <Form.Group>
    <Form.Control className='mt-3' type="text" value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Student Name" required/>
   
  </Form.Group>
  <Form.Group>
    <Form.Control type="text" value={F_Name} onChange={(e)=>setF_Name(e.target.value)} placeholder="Enter Father Name" required/>

  </Form.Group>
  <Form.Group>
    <Form.Control type="text" value={Address} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter Address" required/>

  </Form.Group>
  <Form.Group>
    <Form.Control type="text" value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group>
    <Form.Control type="number" value={Phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Contact No." required/>
  </Form.Group>
  <Form.Group>
  <Form.Control value={Course} onChange={(e)=>{setCourse(e.target.value);}} as="select" required >
          <option>...Please Select Your Course...</option>
          <option value='bca'>BCA</option>
          <option value='bba'>BBA</option>
          <option value='mca'>MCA</option>
          <option value='btech'>B.Tech</option>
          <option value='mtech'>M.Tech</option>
        </Form.Control>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Confirm for records" required/>
  </Form.Group>
  <div className='bg-success pt-3 pb-3 text-center'><Button className='btn-outline-success'  variant="light" type="submit">
    Submit
  </Button>
  </div>
  </div>

</Form>
<div className='text-center mt-3'>
Or
</div>
<Form method='post'  onSubmit={submitFileHandler} encType='multipart/form-data'>
         <label for='excel'>Import File Of Excel</label>
         <input type='file' onChange={(e)=>setFile(e.target.files[0])} class="form-control bg-info border-0 mb-3 px-0 mx-0" name='excel'/>
          <input type='submit' value="Import Data" className='btn btn-success btn-block text-center' />
       </Form>
</div>

       {/* ----------------------------------------------------------    */}
        <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Admmission Response</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-success'>Your Admission is Sccessfully done......!!</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Done
          </Button>
         
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Admission
