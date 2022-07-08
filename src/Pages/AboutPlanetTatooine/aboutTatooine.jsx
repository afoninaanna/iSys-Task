import React from "react";
import styles from "./about.css";
import Button from "../../Component/button.jsx";
import { Link } from "react-router-dom";

function About() {
    async function getResponse() {
        let response = await fetch('https://swapi.dev/api/planets/1');
        let content = await response.json();

        let list = document.querySelector('.listFirstPlanet');

        let key;
        for (key in content) {
            if ((key === 'residents') || (key === 'created') || (key === 'edited') || (key === 'films') || (key === 'url')) {
                continue;
            } else {
                list.innerHTML += `
        <li>${key} : ${content[key]}</li>
        `
            }
        }
    }
    getResponse();
    return (
        <div className={styles.containerInfo}>
            <h2>Сведения о Tatooine</h2>
            <ul className='listFirstPlanet'>
            </ul>
            <Link to='/moreInfo'>
            <Button className={styles.btnMoreInfo}>Подробнее</Button>
            </Link>
        </div>
    )
}
export default About;