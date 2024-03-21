import React from 'react';
import './article.css';

 
const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='blog__container-article'>
      <div className='blog__container-article-image'>
        <img src={imgUrl} alt='blog'/>
      </div>
      <div className='blog__container-article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
      </div>
      <p>Read full articles</p>
    </div>
  )
}

export default Article;
