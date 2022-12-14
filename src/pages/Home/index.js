import React from 'react';
import ClientsCarousel from '../../components/ClientsCarousel';
import HeroSection from '../../components/HeroSection';
import VideoSection from '../../components/VideoSection';
import './index.css';

const Home = () => {
  return (
    <div className='HomePageContainer'>
        <HeroSection />
        <VideoSection />
        <ClientsCarousel />
    </div>
  )
}

export default Home