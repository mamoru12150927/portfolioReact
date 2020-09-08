import React from 'react';
import './App.css';
import Header from './Compornent/Header';
import Contents  from './Compornent/Contents';
import Footer from './Compornent/Footer';
import Menu from './Compornent/Menu';
import Title from './Compornent/Title'
function App() {
  const titles = ['Introduction', 'Works', 'Skills', 'Contact'];
  return (
    <div className="portfolio-wrapper">
      <Header />
      <Menu menuTitle={titles} />
      <Title className={"portfolio-contents-title"} title={"自己紹介"}/>
      <Contents clicked={"/Introduction"}/>
      <Title className={"portfolio-contents-title"} title={"業務経歴"}/>
      <Contents clicked={"/Works"}/>
      <Title className={"portfolio-contents-title"} title={"スキル"}/>
      <Contents clicked={"/Skills"}/>
      <Title className={"portfolio-contents-title"} title={"連絡先"}/>
      <Contents clicked={"/Contact"}/>
      <Footer />
      </div>
  );
}

export default App;
