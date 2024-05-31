import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './home.css'; // Import the CSS file
import flyingVideo from '../assets/images/flybg.mp4';
import icon38 from '../assets/images/38logo.png';
import ProductPage from './products';
import icon from '../assets/images/down.png';
import { useState } from 'react';
import mapImage from '../assets/images/fakemap.png';






const Section1Left: React.FC = () => {
  return (
    <section className="section1-left">
      <div className="video-wrapper">
        <video autoPlay loop muted className="flying-video">
          <source src={flyingVideo} type="video/mp4" />
        </video>
        <div className="icon-overlay">
          <img src={icon38} alt="38 logo" className="icon-image" />
        </div>
      </div>
    </section>
  );
};

const Section1Right: React.FC = () => {
    return (
      <section className="section1-right">
        <p className="intro-text">
          <b>&nbsp;&nbsp;&nbsp;<span className="large-text">源自傳統，融入現代</span></b>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;漢方草本養護智慧，
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;為您開啟髮質煥然一新之旅，
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;為您的髮質注入全新活力。
          <br />
          <br />
          </p>
        <Parallax speed={-10}>
          <div className="buttons">
            <h1 className="product-name">&nbsp;&nbsp;38BEAUTY</h1>
          </div>  
        </Parallax>
      </section>
    );
  };

  const Sectionmid: React.FC = () => {
    return (
      <div className='sectionmid'>&nbsp;</div>
    );
  };

  const Section2: React.FC = () => {
    const [buttonClicked, setButtonClicked] = useState(false);
  
    const handleClick = () => {
      setButtonClicked(true);
    };
  
    const handleBack = () => {
      setButtonClicked(false);
    };
  
    return (
      <section className="section2">
        <div className="content">
          {!buttonClicked && (
            <button className="custom-button" onClick={handleClick}>
              <span className="button-text">探索我們的頭髮護理中心</span>
              <img src={icon} alt="Button Icon" className="button-icon" />
            </button>
          )}
  
          {buttonClicked && (
            <div className="map-overlay">
              <img src={mapImage} alt="Map" className="map-image" />
              <button className="back-button" onClick={handleBack}>
                Back
              </button>
            </div>
          )}
        </div>
      </section>
    );
  };

  const Sectionlater: React.FC = () => {
    return (
      <div className='sectionlater'>&nbsp;</div>
    );
  };

const Section3: React.FC = () => {
  return (
    <section className="section3">
      <ProductPage />
    </section>
  );
};

const Home: React.FC = () => {
  return (
    
    <ParallaxProvider>
      <div className="home-container">
        <Section1Left />
        <Section1Right />
        <Sectionmid/>
        <Section2 />
        <Sectionlater/>
        <Section3 />
      </div>
    </ParallaxProvider>
    
  );
};

export const Route = createFileRoute('/home')({
  component: Home,
});

export default Home;