import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './home.css'; // Import the CSS file
import flyingVideo from '../assets/images/flybg.mp4';
import icon38 from '../assets/images/38logo.png';
import ProductPage from './products';
import icon from '../assets/images/down.png';
import { useState } from 'react';
import mapImage from '../assets/images/real_location.png';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import  flower1 from '../assets/images/flower1.svg';
import  flower2 from '../assets/images/flower2.svg';
import  flower3 from '../assets/images/flower3.svg';
import  flower4 from '../assets/images/flower4.svg';





const Section1Left: React.FC = () => {
  return (
    <section className="section1-left">
      <div className="video-wrapper">
        <video autoPlay loop muted playsInline className="flying-video">
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
      <div className="icon-container">
      <a href="https://www.instagram.com/qxqs_hair_treatment_center?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="icon-link instagram">
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a href="https://www.facebook.com/profile.php?id=61557933878671&mibextid=LQQJ4d" className="icon-link facebook">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
    </div>

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

  const BrandIntro: React.FC = () => {
    return (
      <div className="brand-intro">
        <div className="text-container">
        <div className="left-side">
          <h2>品牌概念</h2>
          <p>“38 Beauty” 的「漢方草本」系列，靈感來自於一位著名老中醫記載下來的食療藥方。這啟發了我們開發出一系列的 「漢方草本」 育髮及護髮產品。
</p>
        <p>「香港品牌」+「香港製造」結合現代科學及古代秘方，將「漢方草本」融入日常生活。讓每個顧客都能更簡單、更方便地體驗「漢方草本」 帶來美好的功效。無論您是想改善頭髮健康，還是追求美麗，“38”為您提供最好的 「漢方草本」 護髮產品及服務。</p>
        </div>
        </div>
        <div className="image-container">
        <img src={flower1} alt="Logo" className='flower-image' />
        <img src={flower2} alt="Logo" className='flower-image2' />
        <img src={flower3} alt="Logo" className='flower-image3' />
        <img src={flower4} alt="Logo" className='flower-image4' />
        </div>
      </div>
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
                返回
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
        <BrandIntro />
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