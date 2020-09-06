import React from 'react';
import './App.css';
import Header from './Compornent/Header';
import Contents from './Compornent/Contents';
import Footer from './Compornent/Footer';
function App() {
  return (
    <>
      <Header />
      <Contents value="Javaエンジニアやってます。"/>
      <Footer />
    </>
  );
}

export default App;
