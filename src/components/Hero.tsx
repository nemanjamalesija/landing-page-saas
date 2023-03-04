import React from 'react';
import hero from '../images/hero.png';

const Hero = () => {
  return (
    <section className="hero section--hero">
      <div className="hero__container">
        <div className="hero__container--text-div">
          <h1 className="heading-primary">
            Benedikt, sa osmijehom sodrum postaje.
          </h1>
          <p className="hero__container--paragraph">
            Lorem Ipsim sodrum? Hodlum hodlum.
          </p>
          <button className="btn hero__container--button">Learn more</button>
        </div>
        <div className="hero__container--image-div">
          <img className="hero__container--image" src={hero} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
