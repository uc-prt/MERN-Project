import axios from 'axios'
import React,{useState} from 'react'
import {Form,Button,Modal} from 'react-bootstrap'
const createBrowserHistory=require("history").createBrowserHistory;
const history = createBrowserHistory();
const UpdateStudent = (props) => {
  const id = props.location.state;

    const [Name, setName] = useState('');
    const [F_Name, setF_Name] = useState('')
    const [Email, setEmail] = useState('')
    const [Address, setAddress] = useState('')
    const [Phone, setPhone] = useState('');
    const [Course, setCourse] = useState('')
    const [show, setShow] = useState(false);

    console.log(Name);
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
    
    axios.post('http://localhost:7000/studentdb/updateStudent/'+id,stuData).then((res)=>{
      history.push('/showStudent');
      handleShow();
        console.log('updated')
       
    })
}
//For Modal Closing
const handleClose = () => {
  
  setShow(false);
  
}
//For Modal Opening
const handleShow = () => {
  
  setShow(true);
}


    return (
        <div className='mt-5'>
          <div className='mt-5 col-md-6 offset-md-3 py-5 bg-info'>
            <Form className='admission-form bg-light col-md-10 offset-md-1' onSubmit={submitHandler}>
                <div className='bg-success py-3 text-center text-light'><h2>Student Updation Form</h2></div>
             
  <Form.Group className='my-3'>
    <Form.Control type="text" value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Student Name" required/>
   
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
    </Form.Text>
  </Form.Group>
  <Form.Group>
    <Form.Control type="number" value={Phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Phone No." required/>
  </Form.Group>
  <Form.Group>
    <Form.Label>Selected Courses</Form.Label>
    <Form.Control type="text" value={Course} onChange={(e)=>setCourse(e.target.value)} placeholder="Enter Selected Course Name" required/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Confirm Your Updated Data" required/>
  </Form.Group>
  <div className='bg-success pt-3 pb-3 text-center'><Button className='btn-outline-success' variant="light" type="submit">
    Submit
  </Button></div>
  
</Form></div>

  {/* After Submission Modal Opening  */}
{/* ---------------------------------------------------*/}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admmission Response</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-success'>Your Updation Process Sccessfully done......!!</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Done
          </Button>
         
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default UpdateStudent
