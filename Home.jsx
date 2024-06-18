import React from 'react';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import WhyChooseVidyam from './components/WhyChooseVidyam';
import Courses from './components/Courses';
import Quotes from './components/Quotes';
import Footer from './components/Footer';
function Home() {
  return (
    <>
      <ImageSlider />
      <WhyChooseVidyam />
      <Courses />
      <Quotes />
      <Footer />
    </>
  )
}

export default Home