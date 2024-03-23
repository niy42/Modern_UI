import React from 'react';
import './blog.css';
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './import'

const Blog = () => {
  return (
    <div className='blog section__padding'>
      <div className='blog__heading'>
        <h1 className='gradient__text'>A Lot is Happening we are blogging about</h1>
      </div>
      <div className='blog__container'>
        <div className='blog__container-groupA'>
          <Article imgUrl={blog01} date='Feb 26, 2024' title='Gpt3 and Ai is the feature. Lets explore how it is'/>
        </div>
        <div className='blog__container-groupB'>
          <Article imgUrl={blog02} date='Feb 26, 2024' title='Gpt3 and Ai is the feature. Lets explore how it is'/>
          <Article imgUrl={blog03} date='Feb 26, 2024' title='Gpt3 and Ai is the feature. Lets explore how it is'/>
          <Article imgUrl={blog04} date='Feb 26, 2024' title='Gpt3 and Ai is the feature. Lets explore how it is'/>
          <Article imgUrl={blog05} date='Feb 26, 2024' title='Gpt3 and Ai is the feature. Lets explore how it is'/>
        </div>
      </div>
    </div>
  )
}

export default Blog;
