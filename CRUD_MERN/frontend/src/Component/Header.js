import React from 'react'
import {Navbar,Nav,Form,Button,FormControl,NavDropdown} from 'react-bootstrap'
const Header = () => {
    return (
        <div>
<Navbar bg="warning" style={{'fontSize':'21px'}} fixed='top' expand="lg">
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '170px' }}
      navbarScroll
    >
      <Nav.Link href="/" className='text-light'>Home</Nav.Link>
      <Nav.Link href="/about" className='text-light'>About</Nav.Link>
      <Nav.Link href="/contact" className='text-light'>Contact</Nav.Link>
      <NavDropdown title="Students" className='text-light' id="navbarScrollingDropdown">
        <NavDropdown.Item href="/admission">Admission</NavDropdown.Item>
        <NavDropdown.Item href="/result">Result</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/attendence">Attendence</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/news" className='text-light'>News</Nav.Link>
      <Nav.Link href="/gallary" className='text-light'>Gallary</Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-danger">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header
