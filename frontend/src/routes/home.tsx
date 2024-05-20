import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './home.css'; // Import the CSS file

const Section1Left: React.FC = () => {
  return (
    <section className="section1-left">
      <Parallax speed={-10}>
        {/* Left side content */}
      </Parallax>
    </section>
  );
};

const Section1Right: React.FC = () => {
  return (
    <section className="section1-right">
      <Parallax speed={-10}>
        <div className="buttons">
          <h1>38 Beauty</h1>
        </div>
      </Parallax>
    </section>
  );
};

const Section2: React.FC = () => {
  return (
    <section className="section2">
      <Parallax speed={5}>
        <h2>Section 2</h2>
        <button>Hair Treatment Center</button>
        <p>This is the content for the second section.</p>
      </Parallax>
    </section>
  );
};

const Section3: React.FC = () => {
  return (
    <section className="section3">
      <Parallax speed={-20}>
        <h2>Section 3</h2>
        <button>Hair Products</button>
        <p>This is the content for the third section.</p>
      </Parallax>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <ParallaxProvider>
      <div className="home-container">
        <Section1Left />
        <Section1Right />
        <Section2 />
        <Section3 />
      </div>
    </ParallaxProvider>
  );
};

export const Route = createFileRoute('/home')({
  component: Home,
});

export default Home;