import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='whatgpt3 section__margin' id='whatisgpt3'>
      <div className='whatgpt3__feature'>
        <Feature title='What is GPT3' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
      </div>
      <div className='whatgpt3__heading'>
        <h1 className='gradient__text'>The possibilities are beyond your Imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='whatgpt3__container'>
        <Feature title='Chatbox' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '/>
        <Feature title='KnowledgeBase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
        <Feature title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
      </div>
      
    </div>
  )
}

export default WhatGPT3;

const WhatGPT4 = () => {
  return(
    <div className='whatgpt4'>
      <div className='whatgpt4__header'>
        <h1>This is me in React action</h1>
        <p>testing app</p>
        <div className='whatgpt4__header-sign'>
          <input type='email' placeholder='Enter Your Email'/>
          <button>Click me</button>

        </div>
      </div>
      <div className='whatgpt4__image'>

      </div>

    </div>
  );
}
