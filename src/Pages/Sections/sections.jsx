import React, { Component } from "react";
import styles from './sections.css';
import Button from "../../Component/button.jsx";
import { Link } from "react-router-dom";

function Sections(){
    async function getResponse() {
        let response = await fetch('https://swapi.dev/api//');
        let content = await response.json();
        let buttons = document.querySelectorAll('Button');
        
        let i = -1;
        for (let key in content) {
            buttons[i + 1].textContent = `${key}`;
            i++;
        }
    }
    getResponse();
    return(
        <div className={styles.parentBtns}>
            <div>
                <Button></Button>
                <Link to="/planets">
                    <Button className={styles.planetsBtn}></Button>
                </Link>
                <Button></Button>
            </div>
            <div>
                <Button></Button>
                <Button></Button>
                <Button></Button>
            </div>
        </div>
    )
}
export default Sections;