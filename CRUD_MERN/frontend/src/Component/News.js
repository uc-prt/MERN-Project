import React from 'react'
// import card1 from '../images/news/card1.jpg'
import tec1 from '../images/news/tec1.jpg'
import tec2 from '../images/news/tec2.jpg'
import tec3 from '../images/news/tec3.jpg'
import tec4 from '../images/news/tec4.jpg'
import tec5 from '../images/news/tec5.jpg'
import tec6 from '../images/news/tec6.jpg'
import tec7 from '../images/news/tec8.jpg'
import tec9 from '../images/news/tec9.jpg'
import Cards from './Cards'
const News = () => {
    return (
        <div className='mt-5 pt-3'>
          <u className='text-danger text-center'><h1>Our News</h1></u>
         <div className='row w-100'>
           <div className='col-md-3 col-sm-6'>
            <Cards img={tec1} title="Electrical Engineering" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
           </div>
           <div className='col-md-3 col-sm-6'>
            <Cards img={tec2} title="Electrical Engineering" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
           </div>
           <div className='col-md-3 col-sm-6'>
            <Cards img={tec3} title="Electrical Engineering" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
           </div>
           <div className='col-md-3 col-sm-6'>
            <Cards img={tec4} title="Electrical Engineering" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
           </div>
           <div className='col-md-3 col-sm-6'>
            <Cards img={tec5} title="Electrical Engineering" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
           </div>
           <div className='col-md-3 col-sm-6'>
            <Cards img={tec6} title="Electrical Engineering" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
           </div>
           <div className='col-md-3 col-sm-6'>
            <Cards img={tec7} title="Electrical Engineering" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
           </div>
           <div className='col-md-3 col-sm-6'>
            <Cards img={tec9} title="Electrical Engineering" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
           </div>
         </div></div>
    )
}

export default News
