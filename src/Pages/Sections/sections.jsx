import React, { Component } from "react";
import styles from './sections.css';
import Button from "../../Component/button.jsx";
import { Link } from "react-router-dom";

function Sections(){
    return(
        <div className={styles.parentBtns}>
            <div>
                <Button>People</Button>
                <Link to="/planets">
                    <Button className={styles.planetsBtn}>Planets</Button>
                </Link>
                <Button>Films</Button>
            </div>
            <div>
                <Button>Species</Button>
                <Button>Vehicles</Button>
                <Button>Starships</Button>
            </div>
        </div>
    )
}
export default Sections;