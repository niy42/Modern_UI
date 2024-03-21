import React, { Component } from 'react';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import {  Brand, CTA, Navbar5 } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='gradient__bg'>
            <Navbar5 />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    )
  }
}

export default App
