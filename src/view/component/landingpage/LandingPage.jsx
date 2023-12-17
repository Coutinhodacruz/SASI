import React, { useState } from 'react';
import Joshiverse from '../../../assets/joshiverse.jpeg'
import ImageIcon from '../../../assets/WhatsApp Image 2023-12-14 at 00.35.27.jpeg'
import BackgroundImage from '../../../assets/mission.jpg'
import Image1 from '../../../assets/2.jpg'
import Image2 from '../../../assets/1.jpg'
import Image3 from '../../../assets/3.jpg'
import Facebook from '../../../assets/facebook.png'
import Youtube from '../../../assets/youtube.png'
import Instagram from '../../../assets/instagram.png'
import Twitter from '../../../assets/x.png'
import ScrollButton from './ScrollButton';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import '../../../styles/landingpage/LandingPage.css';

const LandingPage = () => {

  const [visibleText, setVisibleText] = useState(null);
  const missionText = 
  <div className='vision-mission'>
    <div className='vision-mission-header'>
      <p className='clicked-text-head'>Our Mission</p>
      <p>There are many variations of passages of Lorem Ipsum available,
          There are many variations of <br/>passages of Lorem Ipsum available,
          many variations passages of Lorem available, 
          and they try to<br/> hard work.</p>
    </div>
    <img src={BackgroundImage} alt='mission-icon'/>

  </div>
  const handleHeaderClick = (header) => {
    if(header === 'VISION'){
      setVisibleText(
      <div className='vision-mission'>
        <div className='vision-mission-header'>
          <p className='clicked-text-head'>Our Vision</p>
          <p>There are many variations of passages of Lorem Ipsum available,
          There are many variations of <br/>passages of Lorem Ipsum available,
          many variations passages of Lorem available, 
          and they try to<br/> hard work.</p>
        </div>
        <img src={BackgroundImage} alt='vision-icon'/>
      </div>)
    }else if(header === 'MISSION'){
      setVisibleText(null)
    }
  
  
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  
  return (

    <main>
      <div id='nav-bar'>
        <div>
          <img src={Joshiverse} alt='Icon' style={{height: "90px",width: '80px', borderRadius: '10px'}}/>
        </div>
        <div id='nav'>
          <p className='nav-text'><a href='#about'>About</a></p>
          <p className='nav-text'><a href='#gallery'>Gallery</a></p>
          <p className='nav-text'><a href='#sasi-intro'>SASI</a></p>
        </div>
      </div>
      <div id='hero-section'>
        <h2>Help The <span>People</span></h2>
        <h1>Grow up <span>humanity</span> & <span>kindness</span></h1>
        <p>There are many variations of passages of Lorem Ipsum available,</p> 
        <p>but the majority have suffered alteration in some form.</p>
      </div>
      <ScrollButton targetIds={['about', 'gallery', 'footer']} />
      <div id='about'>
        <div id='about-heading'>
          <h2 className='headings'>About Joshiverse</h2>
          <p>There are many variations of passages of Lorem Ipsum available, 
          but<br/> the majority have suffered alteration in some form</p>
        </div>
        <div>
          <div id='about-vision-header'>
            <div id='clickers'>
              <h2 className='vm' onClick={() => handleHeaderClick('VISION')} style={{cursor: "pointer"}}>Our Vision</h2>
              <h2>/</h2>
              <h2 className='vm' onClick={() => handleHeaderClick('MISSION')} style={{cursor: "pointer"}}>Our Mission</h2>
            </div>
            <div id='clicked-text'>
              {visibleText && <div>{visibleText}</div>}
              {!visibleText && <div>{missionText}</div>}
            </div>
          </div>
        
        </div>
      </div>
      <ScrollButton targetIds={['about', 'gallery', 'footer']} />
      <div id='gallery'>
        <div id='gallery-first'>
          <h2 className='headings'>Joshiverse Gallery</h2>
          <p>There are many variations of azer duskam of Lorem Ipsum available, 
          but<br/> the majority have suffered alteration in some form, by injected humour,</p>
        </div>
        <div id='gallery-second'>
          <Slider {...settings}>
            <div className='gallery-slide'>
              <div className='gallery'>
                <img src={Image1} alt=''/>
                <img src={Image2} alt=''/>
                <img src={Image3} alt=''/>
              </div>
            </div>
            
            <div className='gallery-slide'>
              <div className='gallery'>
              <img src={Image1} alt=''/>
              <img src={Image2} alt=''/>
              <img src={Image3} alt=''/>
              </div>
            </div>

            <div className='gallery-slide'>
              <div className='gallery'>
              <img src={Image1} alt=''/>
              <img src={Image2} alt=''/>
              <img src={Image3} alt=''/>
              </div>
            </div>

            <div className='gallery-slide'>
              <div className='gallery'>
              <img src={Image1} alt=''/>
              <img src={Image2} alt=''/>
              <img src={Image3} alt=''/>
              </div>
            </div>

            <div className='gallery-slide'>
              <div className='gallery'>
              <img src={Image1} alt=''/>
              <img src={Image2} alt=''/>
              <img src={Image3} alt=''/>
              </div>
            </div>

            <div className='gallery-slide'>
              <div className='gallery'>
              <img src={Image1} alt=''/>
              <img src={Image2} alt=''/>
              <img src={Image3} alt=''/>
              </div>
            </div>

            <div className='gallery-slide'>
              <div className='gallery'>
              <img src={Image1} alt=''/>
              <img src={Image2} alt=''/>
              <img src={Image3} alt=''/>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <ScrollButton targetIds={['about', 'gallery', 'footer', 'sasi-intro']} />
      <div id='sasi-intro'>
        <div id='text-sasi'>
          <div id='inner-sasi'>
            <h2 className='headings'>SA<span>SI</span></h2>
            <img src={ImageIcon} alt=''/>
          </div>
          <p>It is a long established fact that a reader will be distracted by the readable content of<br/> a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a<br/> more-or-less normal distribution of letters, as opposed</p>
          <button>Read More...</button>
        </div>
      </div>
      <ScrollButton targetIds={['about', 'gallery', 'footer']} />
      <div id='footer'>
        <div id='first-footer'>
          <div id='first-column-footer'>
            <h4>ABOUT Joshiverse</h4>
            <p>There are many variations of passages <br/>
            of Lorem Ipsum available, but the.There<br/>
              are many variations of passages</p>
            <div>
              <button><img src={Facebook} alt=''/></button>
              <button><img src={Youtube} alt='' /></button>
              <button><img src={Instagram} alt='' /></button>
              <button><img src={Twitter} alt='' /></button>

            </div>
          </div>
          <div id='second-column-footer'>
            <h4>IMPORTANT INFO</h4>
            <a href='#about'>About Joshiverse</a>
            <a href='#nav'>Annual Reports</a>
            <a href='#nav'>Mission & Vision</a>
            <a href='#nav'>Statistics</a>

          </div>
          <div id='third-column-footer'>
            <h4>IMPORTANT LINKS</h4>
            <a href='#nav'>Donate</a>
            <a href='#gallery'>Media Resources</a>
            <a href='#nav'>Quick Contact</a>
            <a href='#nav'>Address</a>
          </div>

        </div>
        {/* <button><img src={ArrowUp} alt='arrow'/></button> */}
        <div id='second-footer'>
          <hr/>
          <p>Copyright © Trust 2021 . ALL Right Reserved .</p>
        </div>

      </div>

    </main>
      
  );
};

export default LandingPage;
