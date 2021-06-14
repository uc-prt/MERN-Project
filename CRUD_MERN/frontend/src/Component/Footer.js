import React from 'react'
import {Card} from 'react-bootstrap'
import fb from '../images/icons/fb.png'
import google from '../images/icons/google.png'
import insta from '../images/icons/insta.png'

const Footer = () => {
    return (
        <div className='row bg-dark text-light w-100' style={{'overflow':'hidden'}}>
  <div className='col-md-4 col-sm-6'>
    <Card className='bg-dark' style={{ width: '18rem','display':'flex','float':'left','margin':'3rem','padding':'1em','textAlign':'justify'}}>
  <Card.Body>
    <Card.Title>EduCrash University</Card.Title>
    <Card.Text>But when shot real her. Chamber her one visite removal six sending himself boys scot exquisite existend an
But when shot real her hamber her
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div className='col-md-4 col-sm-6'>
<Card className='bg-dark' style={{ width: '18rem','display':'flex','float':'left','margin':'3rem','padding':'1em','textAlign':'justify'}}>
  <Card.Body>
    <Card.Title>Quick Links</Card.Title>
    <Card.Text>
      <ul>
        <li><a className='text-light text-center' href='/home'>Home</a></li>
        <li><a className='text-light text-center' href='/about'>About </a></li>
        <li><a className='text-light text-center' href='/contact'>Contact</a></li>
        <li><a className='text-light text-center' href='/news'>News</a></li>
        <li><a className='text-light text-center' href='/gallary'>Gallary</a></li>
      </ul>
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div className='col-md-4 col-sm-6'>

<Card  className='bg-dark' style={{ width: '24rem','display':'flex','float':'left','margin':'3rem','padding':'1em','textAlign':'justify'}}>
  <Card.Body>
  <h1>News Letter</h1>
<div><input type='text' style={{'height':'40px','outline':'none','color':'blue','width':'90%'}}
placeholder='Enter Your Email Address'/></div>
 <u> <h3 className='m-3'>Follow On</h3></u>
  <p>
  <span className='m-2'><a href='https://accounts.google.com/signin/v2/identifier?hl=en&flowName=GlifWebSignIn&flowEntry=AddSession' target='blank'><img src={google}alt='not found'  style={{'width':'40px','height':'40px','borderRadius':'50%'}}/></a></span>
  <span className='m-2'><a href='https://www.facebook.com/' target='blank'><img src={fb} alt='not found' style={{'width':'40px','height':'40px','borderRadius':'50%'}}/></a></span>
  <span className='m-2'><a href='https://www.instagram.com/accounts/login/'  target='blank'><img src={insta} alt='not found'  style={{'width':'40px','height':'40px','borderRadius':'50%'}}/></a></span>
</p>

  </Card.Body>
</Card>
</div>
</div>
        
    )
}

export default Footer
