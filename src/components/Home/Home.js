import React from 'react';
import video from '../../images/video.mp4'
import Typical from 'react-typical';
import './Carousel.css'
function Home() {
  return <div>

    <header className='outer-container'>
<div className='video-container'>
    <video src={video} autoPlay loop muted />
</div>

  <div className='text'>
    <h1>FortunateSparrows</h1>
   <h2> <Typical loop={Infinity}
        steps={['one-to-one Mentorship ',
        1000,
       'Life Time Material Access',
       1000,
       'Live Session',
       1000,
       'Portfolio Projects',
       1000,]} /> </h2>
      <a href='/Courses' className='button'>explore</a>
  </div>

    </header>
  </div>;
}

export default Home;
