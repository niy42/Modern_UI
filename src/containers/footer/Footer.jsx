import React from 'react';
import './footer.css';
import gpt3 from '../../assets/GPT-3x.svg'
const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className='footer__heading'>
        <h1 className='gradient__text'>
          Do You want to step into the future before others
        </h1>
      </div>
      <div className='footer__btn'>
        <p>request early access</p>
      </div>
      <div className='footer__links'>
        <div className='footer__links-logo'>
          <img src={gpt3} alt='gpt3'/>
          <p>Crechterwoord K12 182 DK Alknjkcb,<br />All Rights Reserved</p>
        </div>
        <div className='footer__links-div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='footer__links-div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Social Media</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='footer__links-div'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='footer__copywrite'>
        <p>© 2024 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
