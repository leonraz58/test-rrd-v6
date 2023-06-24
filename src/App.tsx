import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink, Routes, Route, Outlet, useParams} from "react-router-dom";

const Profile = () => {
    const params = useParams<'*'>()

    const some = params['*']

    console.log(some)

    return <div>profile</div>
}

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>main</NavLink>---
            <NavLink to={'/login'}>login</NavLink>---
            <NavLink to={'/profile'}>profile</NavLink>---
            <NavLink to={'/profile/1'}>profile/1</NavLink>---

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile/*'} element={<div><Profile/></div>}/>
            </Routes>
        </div>
    );
}

export default App;
