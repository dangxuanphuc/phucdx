import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content'
import './styles/main.css';

const Main = () => {
  return (
    <div className="main-screen wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Main;
