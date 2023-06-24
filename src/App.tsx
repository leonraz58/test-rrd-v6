import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink, Routes, Route, Outlet} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>main</NavLink>---
            <NavLink to={'/login'}>login</NavLink>---
            <NavLink to={'/profile'}>profile</NavLink>---
            <NavLink to={'/profile/settings'}>settings</NavLink>---
            <NavLink to={'/profile2'}>profile2</NavLink>---
            <NavLink to={'/profile2/settings2'}>settings2</NavLink>---

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile/*'} element={(
                    <div>
                        profile
                        <Routes>
                            <Route path={'/settings'} element={<div>settings</div>}/>
                        </Routes>
                    </div>
                )}
                />
                <Route path={'/profile2'} element={(
                    <div>
                        profile2
                        <Outlet/>
                    </div>
                )}>
                    <Route path={'*'} element={<div>profile page not found</div>}/>
                    <Route index element={<div>check id</div>}/>
                    <Route path={':id/:x'} element={<div>id</div>}/>
                    <Route path={'settings2'} element={<div>settings2</div>}/>
                </Route>


            </Routes>
        </div>
    );
}

export default App;
