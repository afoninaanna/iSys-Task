import React from "react";
import styles from "./moreInfo.css";

function MoreInfo(){
    async function getResponse() {
        let response = await fetch('https://swapi.dev/api/planets/1');
        let content = await response.json();

        let list = document.querySelector('.listFirstPlanet');

        let key;
        for (key in content) {
            // if(content[key].startsWith('https')){
            //     getResponse(`${content[key]}`);
            // }
            if ((key === 'residents') || (key === 'created') || (key === 'edited') || (key === 'films') || (key === 'url')) {
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
            </ul>
        </div>
    )
}
export default MoreInfo;
