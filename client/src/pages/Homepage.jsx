import React from 'react';

import WebpackIcon from '../assets/webpack-icon.png';

import '../styles/pages/_homepage.scss';

function Homepage() {
  return (
    <body>
      <img className='webpack-icon' src={WebpackIcon} alt='main webpack logo' />
    </body>
  );
}

export default Homepage;
