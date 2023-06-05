import React from 'react';
import HeroSection from './components/HeroContent';
import Homepage from './pages/Homepage';

// importing base css
import './styles/base/_base.scss';
import './styles/base/_helper.scss';
import './styles/base/_typography.scss';

function App() {
  return (
    <>
      <HeroSection />
      <Homepage />
    </>
  );
}

export default App;
