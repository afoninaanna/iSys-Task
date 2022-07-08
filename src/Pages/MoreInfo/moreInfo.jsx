import React from "react";
import styles from "./moreInfo.css";

function MoreInfo(){
    async function getResponse() {
        let response = await fetch('https://swapi.dev/api/planets/1');
        let content = await response.json();

        let list = document.querySelector('.listFirstPlanet');
        let key;
        for (key in content) {
            if (key === 'residents'){
                let li = document.querySelector('.residents');
                li.innerHTML += `${key}`
                for(let link of content[key]){
                    let response = await fetch(`${link}`);
                    let content = await response.json();
                    
                    li.innerHTML += `
                    <ul>
                        <li>${content.name}</li>
                    </ul>
                    `
                }
            }
            if (key === 'films') {
                let li = document.querySelector('.films');
                li.innerHTML += `${key}`
                for (let link of content[key]) {
                    let response = await fetch(`${link}`);
                    let content = await response.json();
                    let li = document.querySelector('.films');


                    li.innerHTML += `
                    <ul>
                        <li>${content.title}</li>
                    </ul>
                    `
                }
            }
            if ((key === 'created') || (key === 'edited') || (key === 'url')) {
                list.innerHTML += `
                <li>${key} : ${content[key]}</li>
                `
            } else {
               continue;
            }
        }
    }
    getResponse();
    return(
        <div className={styles.containerInfo}>
            <h2>Доп.сведения</h2>
            <ul className='listFirstPlanet'>
                <li className='residents'></li>
                <li className="films"></li>
            </ul>
        </div>
    )
}
export default MoreInfo;
