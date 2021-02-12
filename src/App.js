import React, { useState, useEffect } from 'react';

import data from './data';
import Header from './Components/Header/Header';

function App() {
  const [image, setImage] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = image.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, image]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <Header />
      <div className="section-top">
        <div className="button-container-mobile">
              <button className="prev" onClick={() => setIndex(index - 1)}>
                  <img src="./svgs/icon-angle-left.svg" />
              </button>
              <button className="next" onClick={() => setIndex(index + 1)}>
                  <img src="./svgs/icon-angle-right.svg" />
              </button>
          </div>
        <div className="section-top-image">
          {image.map((img, imageIndex) => {
            const { id, image, imageMobile, title } = img;

            let position = 'nextSlide';
            if (imageIndex === index) {
              position = 'activeSlide';
            }
            if (
              imageIndex === index - 1 ||
              (index === 0 && imageIndex === image.length - 1)
            ) {
              position = 'lastSlide';
            }

            return (
                <article className={position} key={id}>
                  <img src={image} alt={title} className="img-desktop"/>
                  <img src={imageMobile} alt={title} className="img-mobile"/>
                </article>
              
            );
          })}
          </div>
          <div className="section-top-description">
            <div className="section-top-description-text">
              <div className="title">
                <h1>Discover innovative ways to decorate</h1>
              </div>
              <div className="text">
                <p>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
              </div>
              <a className="link">Shop Now
                  <img src="./svgs/icon-arrow.svg" />
              </a>
            </div>
            <div className="button-container">
              <button className="prev" onClick={() => setIndex(index - 1)}>
                <img src="./svgs/icon-angle-left.svg" />
              </button>
              <button className="next" onClick={() => setIndex(index + 1)}>
                <img src="./svgs/icon-angle-right.svg" />
              </button>
            </div>
            
          </div>
      </div>
      <div className="section-bottom">
        <div className="section-bottom-left">
          <img src="./images/image-about-dark.jpg" />
        </div>
        <div className="section-bottom-middle">
          <div className="section-bottom-middle-text">
            <h4>About our furniture</h4>
            <p>Our multifunctional collection blends design and function to suit your individual taste.Make each room unique, or pick a cohesive theme that best express your interests and whatinspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
          </div>
        </div>
        <div className="section-bottom-right">
          <img src="./images/image-about-light.jpg" />
        </div>
          
      </div>
    </section>
  );
}

export default App;
