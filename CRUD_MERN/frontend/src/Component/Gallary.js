import React from 'react'
import '../../src/app.css'
import uni1 from '../images/gallary/uni1.jpg'
import uni2 from '../images/gallary/uni2.jpg'
import uni3 from '../images/gallary/uni3.jpg'
import uni4 from '../images/gallary/uni4.jpg'
import uni5 from '../images/gallary/uni5.jpg'
import uni6 from '../images/gallary/uni6.jpg'
import uni7 from '../images/gallary/uni7.jpg'
import uni8 from '../images/gallary/uni10.jpg'
import uni9 from '../images/gallary/uni9.jpg'
const Gallary = () => {
  
    return (
        <div className='gallary text-danger text-center mb-5 pb-3 mt-5 pt-5'>
      <u><h2>Our Gallary</h2></u>
<img src={uni1} className='gallaryimg' alt='Sorry Not Found....'/>
<img src={uni2} className='gallaryimg' alt='Sorry Not Found....'/>
<img src={uni3} className='gallaryimg' alt='Sorry Not Found....'/>
<img src={uni4} className='gallaryimg' alt='Sorry Not Found....'/>
<img src={uni5} className='gallaryimg' alt='Sorry Not Found....'/>
<img src={uni6} className='gallaryimg' alt='Sorry Not Found....'/>
<img src={uni7} className='gallaryimg' alt='Sorry Not Found....'/>
<img src={uni8} className='gallaryimg' alt='Sorry Not Found....'/>
<img src={uni9} className='gallaryimg' alt='Sorry Not Found....'/>
     </div>
    )
}

export default Gallary
