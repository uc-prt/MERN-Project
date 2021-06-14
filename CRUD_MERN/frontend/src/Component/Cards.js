import React,{useState} from 'react'
import {Card,Button,Modal,Form} from 'react-bootstrap'
const Cards = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <center>
        <div>
 <div className='w-100 text-center'>

 <Card style={{ width: '18rem','display':'flex','float':'left','margin':'1.5rem','textAlign':'center'}}>
  <Card.Img variant="top" src={props.img} style={{'height':'200px'}}/>
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>{props.text}</Card.Text>
    <Button className='m-1' variant="primary"><a href='readmore' className='text-light text-decoration-none'>Read More...</a></Button>
    <Button className='m-1' variant="danger"  onClick={handleShow}>Join Now</Button>
  </Card.Body>
</Card>
   
 </div>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Join Our Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        <Form>
  <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
    
  </Form.Group>
  <Form.Group>
  <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group>
    <Form.Label>Course</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Course" />
  </Form.Group> <Form.Group>
  <Form.Label><h5>Amount for Course 14400\-</h5><Button><a href='https://pay.google.com/gp/w/u/0/home/signup' className='text-light' target='blank'>Pay Amount</a></Button></Form.Label> </Form.Group><hr/>
    <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal></div></center>    
        
    )
}

export default Cards
