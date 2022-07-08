import React from 'react';
import ReactDOM from 'react-dom';
import {Routes, Route, Link} from 'react-router-dom';
import styles from './styles.css';
import Sections from '../Pages/Sections/sections.jsx';
import Planets from '../Pages/Planets/planets.jsx';
import AboutPlanetTatooine from '../Pages/AboutPlanetTatooine/aboutTatooine.jsx';
import MoreInfo from '../Pages/MoreInfo/moreInfo.jsx';


function App () {
    return(
        <>
            <header className={styles.header}>
                <Link to="/" className={styles.headerCategory}>
                    <p>Категории</p>
                </Link>
                <Link to="/planets" className={styles.headerPlanets}>
                    <p>Планеты</p>
                </Link>
            </header>
                <Routes>
                    <Route path='/' element={<Sections />}/>
                    <Route path='/planets' element={<Planets />}/>
                    <Route path='/aboutplanetTatooine' element={<AboutPlanetTatooine />}/>
                    <Route path='/moreInfo' element={<MoreInfo />} />
                </Routes>
        </>
    )
}
export default App;