import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

function MainComponent() {
  return (
    <div className='MainComponent' style={{width:"90%"}}>
      <div >
      <Carousel autoPlay infiniteLoop>
      <div style={{height:"100px"}}>
        <img
          src="/images/crousel/image1.jpg"
          alt="img1"

        />
      </div>
      <div>
        <img
          src="/images/crousel/image1.jpg"
          alt="c-img"
          
        />
      </div>
      <div>
        <img
          src="/images/crousel/image1.jpg"
          alt="c-img"
         
        />
      </div>
      <div>
        <img
          src="/images/crousel/image1.jpg"
          alt="c-img"
          
        />
      </div>
      <div>
        <img
          src="/images/crousel/image1.jpg"
          alt="c-img"          
        />
      </div>
    </Carousel>
      </div>
    </div>
  )
}

export default MainComponent
