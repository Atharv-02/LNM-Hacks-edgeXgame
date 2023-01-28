import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import img1 from './bg.png';
import img2 from './Home.png';
import img3 from './new-game.jpeg';
import img4 from './game-1.jpeg';
import img5 from './game-2.jpeg';
import img6 from './game-6.webp';
import img7 from './img-7.jpeg';
import img8 from './img-8.jpeg';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import sm1 from './wallet 4.png';
import sm2 from './cloud-plus 1.png';
import sm3 from './tags 1.png';
import sm4 from './wallet 4.png';
// import './style.css';

const spanStyle = {
  padding: '20px',
  // background: '#efefef',
  color: '#000000',
};

const divStyle = {
  width: '85vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '540px',
  margin: '0 auto',
  borderRadius: '10px',
  marginBottom: '2rem',
};
const slideImages = [
  {
    url: img3,
  },
  {
    url: img4,
  },
  {
    url: img8,
  },
];

const Home = () => {
  return (
    <>
      <div className='main-page'>
        <div className='head-content'>
          <div className='head-img'>
            <img src={img1} alt='' />
          </div>
          <div className='head-img-2'>
            <div className='box'>
              <div className='img-cont'>
                <img src={img2} alt='' />
              </div>
              <p>FIFA 23</p>
            </div>
          </div>
          <div className='side-head'>
            <h3>A NEW PERSPECTIVE</h3>
          </div>
        </div>
        <div className='main-content'>
          <h3>CREATE AND SELL YOUR NFT</h3>
        </div>
        <div className='img-grid'>
          <div className='slide-container'>
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div key={index}>
                  <div
                    style={{
                      ...divStyle,
                      backgroundImage: `url(${slideImage.url})`,
                    }}
                  >
                    <span style={spanStyle}>{slideImage.caption}</span>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
        <div className='what-app-does'>
          <div className='do-1'>
            <img src={sm1} alt='' />
          </div>
        </div>
        <div className='what-app-does'>
          <div className='do-2'>
            <img src={sm2} alt='' />
          </div>
        </div>
        <div className='what-app-does'>
          <div className='do-3'>
            <img src={sm3} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
