import React from 'react';

import WebpackIcon from '../assets/webpack-icon.png';

import '../styles/pages/_homepage.scss';

function Homepage() {
  return (
    <div aria-label='webpack logo container'>
      <img
        aria-label='webpack logo'
        className='webpack-icon'
        src={WebpackIcon}
        alt='main webpack logo'
      />
    </div>
  );
}

export default Homepage;
