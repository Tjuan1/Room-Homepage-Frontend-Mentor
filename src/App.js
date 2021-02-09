import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft, FiArrowRight } from 'react-icons/fi';
import data from './data';
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
      <div className="section-top">
        <div className="section-top-image">
          {image.map((img, imageIndex) => {
            const { id, image, title } = img;

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
                  <img src={image} alt={title} />
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
                <FiArrowRight />
              </a>
            </div>
            <div className="button-container">
              <button className="prev" onClick={() => setIndex(index - 1)}>
                <FiChevronLeft />
              </button>
              <button className="next" onClick={() => setIndex(index + 1)}>
                <FiChevronRight />
              </button>
            </div>
            
          </div>
      </div>
    </section>
  );
}

export default App;
