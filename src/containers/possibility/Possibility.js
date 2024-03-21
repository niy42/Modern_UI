import React from 'react';
import './possibility.css';
import image from '../..//assets/endless.png'
const Possibility = () => {
  return (
    <div className='possibility section__padding' id='possibilities'>
      <div className='possibility__image'>
        <img src={image} alt='possibility'/>

      </div>
      <div className='possibility__content'>
        <h4>Request early access to get started</h4>
        <h1 className='gradient__text'>
          <p>The possibilities are beyond your imagination</p>
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. <br/>
        Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.<br/> 
        Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility;
