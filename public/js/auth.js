import { IsValid } from "./IsValid.js";

const formDOM = document.querySelector('form');
const inputsDOM = document.querySelectorAll('input');
const buttonDOM = document.querySelector('button');

buttonDOM.addEventListener('click', (event) =>{
    event.preventDefault();

    const formData = {};

    for(const inputDOM of inputsDOM) {
        const key = inputDOM.name;
        const value = inputDOM.value;
        formData[key] = value;
    }

    //Validation
    const dataKeys = Object.keys(formData);
    for(const key of dataKeys) {
        const [isErr, msg] = IsValid.username();
    }

    /*
    1. Visi laukai turi buti ne tusti
    2. username min length = 3 max = 30
    3. email min length = 3 max 30
    4. password min length = 3 max 30
    5. passsord and repeat password needs to match
    */
})

