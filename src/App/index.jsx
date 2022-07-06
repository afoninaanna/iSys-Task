import React from 'react';
import ReactDOM from 'react-dom';
import {Routes, Route, Link} from 'react-router-dom';
import styles from './styles.css';
import Sections from '../Pages/Sections/sections.jsx';
import Planets from '../Pages/Planets/planets.jsx';
import AboutPlanet from '../Pages/AboutPlanet/about.jsx';


function App () {
    return(
        <>
            <h2>App index.jsx</h2>
                <Routes>
                    <Route path='/' element={<Sections />}/>
                    <Route path='/planets' element={<Planets />}/>
                    <Route path='/aboutplanet' element={<AboutPlanet />}/>
                </Routes>
        </>
    )
}
export default App;