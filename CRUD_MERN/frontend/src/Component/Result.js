import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import ShowBCAres from './ShowBCAres';

import ReCaptchaV2 from 'react-google-recaptcha'
const Result = () => {
  const [Val, setVal] = useState();
  const [Status, setStatus] = useState();
  const [sid, setStuId] = useState()
  const [form, setForm] = React.useState()
  // ---------------------------------------------------------------

  const handleExpire = () => {
    setForm((currentForm) => {
      return { ...currentForm, token: null }
    })
  }

  const handleToken = (token) => {
    setForm((currentForm) => {
      return { ...currentForm, token }
    })
  }
   
  // ---------------------------------------------------------------
  const ShowResult = (props) => { 
     const id=props.sid;
    ShowBCAres({id})
  
  }
  

  const handleSubmit = (event) => {
    event.preventDefault()
  
const data={
  sid:sid,
  Val:Val,
  Status:Status
}
if(Val==='bca' && Status==='regular'){
  console.log(data)
 ShowResult(data);
}else{
  document.writeln("Not Available")
}
  
  }
  
    return (
    <div className='mt-5 p-5 bg-info'>
      <Form className='col-md-4 bg-light offset-md-4 border border-success' onSubmit={handleSubmit}>
      <h4 className='text-primary p-2 m-3 text-center bg-success text-light'> <u>Result Form</u></h4> 

      <Form.Label>Select Status</Form.Label>
        <Form.Control value={Status} onChange={(e)=>{setStatus(e.target.value);}} as="select" required >
          <option>...Please Select Your Status</option>
          <option value='regular'>Regular</option>
          <option value='irregular'>Irregular</option>
          
        </Form.Control>
      <Form.Label>Select Course</Form.Label>
        <Form.Control value={Val} onChange={(e)=>{setVal(e.target.value);}} as="select" required >
          <option>...Please Select Your Course...</option>
          <option value='bca'>BCA</option>
          <option value='bba'>BBA</option>
          <option value='mca'>MCA</option>
          <option value='btech'>B.Tech</option>
          <option value='mtech'>M.Tech</option>
        </Form.Control>
        <Form.Group > 
        <Form.Label>Student Roll No.</Form.Label>
    <Form.Control type="text"  onChange={(e)=>{setStuId(e.target.value)}} placeholder="Enter Roll No." required/>
  </Form.Group>
  <Form.Group > 

          <ReCaptchaV2
            sitekey={`6LfxIAgbAAAAACyLuTfPqiuhlfO9F5-eo1Yt0A15`}
            onChange={handleToken}
            onExpire={handleExpire}
          
            />
  </Form.Group>
  <Button className='btn-outline-success mb-3' block variant="light" type="submit">
    Submit
  </Button>

</Form>
    </div>
    )
}

export default Result
