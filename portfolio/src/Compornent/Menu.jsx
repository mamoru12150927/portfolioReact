import React, { useState } from 'react';
import Contents from './Contents';

const Menu = (props) => {
    const [ nowClicked , setNowClicked ] = useState();
    const menuList = props.menuTitle.map((v ,index) => {
        return (
            <li key={index} className="portfolio-header-li">
                <button className="portfolio-header-button" onClick={() => setNowClicked("/" + v)}>{v}</button>
            </li>
        )
    });

    return (
        <>
        <nav className="portfolio-header-nav">
            <ul className="portfolio-header-ul">{menuList}</ul>
        </nav>
        </>
    )
}


export default Menu;