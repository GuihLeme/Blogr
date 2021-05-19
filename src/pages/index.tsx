import React from 'react';
import Details from './components/Details';
import Footer from './components/Footer';

import Header from './components/Header';
import Infra from './components/Infra';
import Intro from './components/Intro';

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <Infra />
      <Details />
      <Footer />
    </>
  )
}

export default Home;
