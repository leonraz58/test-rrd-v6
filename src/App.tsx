import React from 'react';
import './App.css';
import {NavLink, Routes, Route, Outlet, useParams} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>main</NavLink>---
            <NavLink to={'/login'}>login</NavLink>---
            <NavLink
                to={'/profile'}
                style={(params) => {
                    return {color: params.isActive ? 'lime' : 'black'}
                }}
            >profile</NavLink>---

            <NavLink to={'/profile/settings'}
                     className={({isActive}) => isActive ? 'act' : 'def'}
            >settings</NavLink>---

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={<div>profile</div>}/>
                <Route path={'/profile/settings'} element={<div>settings</div>}/>
            </Routes>

            <a href="https://github.com/leonraz58"
               target={'_blank'}
               rel={'noreferrer nofollow noopener'}
            >xxx</a>
        </div>
    );
}

export default App;
