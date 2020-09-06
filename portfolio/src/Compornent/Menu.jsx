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
        <ul className="portfolio-header-ul">{menuList}</ul>
        <Contents clicked={nowClicked} />
        </>
    )
}


export default Menu;