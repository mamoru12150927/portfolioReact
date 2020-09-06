import React from 'react';
import Menu from './Menu';
const Header = () => {
    const menuTitle = ['Introduction', 'Works', ' Skills', 'Contact'];
    return (
        <header>
          <h1 className="portfolio-header-h1">Portfolio</h1>
          <nav className="portfolio-header-nav">
            <Menu menuTitle= {menuTitle}/>
          </nav>
       </header>
    )
}

export default Header;