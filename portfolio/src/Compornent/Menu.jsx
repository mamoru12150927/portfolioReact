import React, { useState } from 'react';
import { BrowserRouter, Route ,useHistory} from 'react-router-dom';
import userReactRouter from 'use-react-router';

const Menu = (props) => {
    const menuList = props.menuTitle.map((v ,index) => {
        return (
            <li key={index} className="portfolio-header-li">
                <button className="portfolio-header-button">{v}</button>
            </li>
        )
    });

    return (
        <>
        <ul className="portfolio-header-ul">{menuList}</ul>
        <BrowserRouter history="/Introduction">
            <Route path="/Introduction">
                <Introduction />
            </Route>
            <Route path="/Works" exact component={Works}/>
            <Route path="/Skills" exact component={Skills}/>
            <Route path="/Contact" exact component={Contact}/>
        </BrowserRouter>
        </>
    )
}

const Introduction = () => {
    return <h1>Works</h1>
}

const Works = () => {
    return <h1>Works</h1>
}

const Skills = () => {
    return <h1>Works</h1>
}

const Contact = () => {
    return <h1>Works</h1>
}


export default Menu;