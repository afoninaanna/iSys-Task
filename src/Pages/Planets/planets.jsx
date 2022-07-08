import React from "react";
import styles from "./planets.css";
import Button from "../../Component/button.jsx";
import { Link } from "react-router-dom";


function Planets(){
    async function getResponse() {
        let response = await fetch('https://swapi.dev/api/planets');
        let content = await response.json();
        let buttons = document.querySelectorAll('Button');
       
        for (let i = -1; i < 6; i++){
            buttons[i + 1].textContent = `${content.results[i + 1].name}`;
        }
    }
    getResponse();
    return(
        <div className={styles.parentBtns}>
            <div>
                <Link to="/aboutplanetTatooine">
                    <Button className={styles.planetFirst}></Button>
                </Link>
                <Button></Button>
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
export default Planets;