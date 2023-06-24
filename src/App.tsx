import React, {useEffect} from 'react';
import './App.css';
import {NavLink, Routes, Route, Outlet, useParams, useNavigate, Navigate} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()

    // useEffect(()=>{
    //     if (true) navigate('/login')
    // })

    return (
        <div>
            {/*true && <Navigate to='/login'/> чтобы не происходило первой отрисовки, юзаем тернарник*/}
            profile
            <button onClick={()=>{navigate('/login')}}>logout</button>
            <button onClick={()=>{navigate(-1)}}>back</button>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>main</NavLink>---
            <NavLink to={'/login'}>login</NavLink>---
            <NavLink to={'/profile'}>profile</NavLink>---
            <NavLink to={'/profile/settings'}>settings</NavLink>---

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={<Profile/>}/>
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
