import React from 'react'
import {Carousel} from 'react-bootstrap'
import col1 from '../images/slider/col1.jpg'
import col2 from '../images/slider/col2.jpg'
import col3 from '../images/slider/col3.jpg'
import Cards from './Cards'
import tec1 from '../images/news/tec10.jpg'
import tec2 from '../images/news/tec9.jpg'
import tec3 from '../images/news/tec11.jpg'
import tec4 from '../images/news/tec2.jpg'

const Home = () => {


    return (
        <div className='pt-5 mt-2'>
 <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={col1}
      alt="First slide"
      style={{'height':'30em'}}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={col2}
      alt="Second slide"
      style={{'height':'30em'}}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={col3}
      alt="Third slide"
      style={{'height':'30em'}}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div className='row w-100 text-center' style={{'background':'linear-gradient(rgb(76, 248, 156),rgb(148, 121, 176))'}}>

<div className='col-md-3 col-sm-6'>
<p style={{'fontSize':'7em'}}><i className="bi bi-hand-thumbs-up-fill  text-primary"></i><h2 className=' text-danger'>2m+ Subscribers</h2></p>
</div>
<div className='col-md-3  col-sm-6'>
<p style={{'fontSize':'7em'}}><i className="bi bi-heart-fill text-primary "></i><h2 className=' text-danger'>3000+ Likes</h2></p>
</div>
<div className='col-md-3 col-sm-6'>
<p style={{'fontSize':'7em'}}><i className="bi bi-hand-thumbs-up-fill text-primary"></i><h2 className=' text-danger'>2m+ Subscribers</h2></p>
</div>
<div className='col-md-3 col-sm-6'>
<p style={{'fontSize':'7em'}}><i className="bi bi-heart-fill text-primary"></i><h2 className=' text-danger'>3000+ Likes</h2></p>
</div>

</div>
<hr/>
        <div className='text-center'>
          <h1>Our News</h1> 
          </div>
          <div className='container-fluid'>
          <div className='row w-100'>
            <div className='col-md-3 col-sm-6'>
            <Cards img={tec1} title="Web Development" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            </div>
            <div className='col-md-3 col-sm-6'>
            <Cards img={tec2} title="Web Development" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            </div>
            <div className='col-md-3 col-sm-6'>
            <Cards img={tec3} title="Web Development" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            </div>
            <div className='col-md-3 col-sm-6'>
            <Cards img={tec4} title="Web Development" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            </div>
            </div>

        </div>
        </div>
    )
}

export default Home
