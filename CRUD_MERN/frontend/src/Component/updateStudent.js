import axios from 'axios'
import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
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
        console.log('updated')
       
    })
}
    return (
        <div className='mt-5'>
            <Form className='col-md-6 offset-md-3 py-5' onSubmit={submitHandler}>
                <div className='bg-success pt-4 text-center text-light'><h2>Student Updation Form</h2></div>
  <Form.Group>
    <Form.Label>Student Name</Form.Label>
    <Form.Control type="text" value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Student Name" required/>
   
  </Form.Group>
  <Form.Group>
    <Form.Label>Father Name</Form.Label>
    <Form.Control type="text" value={F_Name} onChange={(e)=>setF_Name(e.target.value)} placeholder="Enter Father Name" required/>

  </Form.Group>
  <Form.Group>
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" value={Address} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter Father Name" required/>

  </Form.Group>
  <Form.Group>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group>
    <Form.Label>Contact No.</Form.Label>
    <Form.Control type="number" value={Phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Selected Course Name" required/>
  </Form.Group>
  <Form.Group>
    <Form.Label>Selected Courses</Form.Label>
    <Form.Control type="text" value={Course} onChange={(e)=>setCourse(e.target.value)} placeholder="Enter Selected Course Name" required/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" required/>
  </Form.Group>
  <div className='bg-success pt-3 pb-3 text-center'><Button className='btn-outline-success' variant="light" type="submit">
    Submit
  </Button></div>
</Form>
        </div>
    )
}

export default UpdateStudent
