import React from 'react';
import { Footer, Contents, Navbar, Header } from '../components';

const Home = () => {
  return (
    <div className="App">
      <div className="">
        <Navbar />
        <Header />
      </div>
      <Contents />
      <Footer />
    </div>
  );
};

export default Home;
