import { IsValid } from "./IsValid.js";

const formDOM = document.querySelector('form');
const inputsDOM = document.querySelectorAll('input');
const buttonDOM = document.querySelector('button');

buttonDOM.addEventListener('click', (event) =>{
    event.preventDefault();

    const formData = {};
    const errorList = [];

    for(const inputDOM of inputsDOM) {
        const key = inputDOM.name;
        const value = inputDOM.value;
        const validationMethod = inputDOM.dataset.validation;
        formData[key] = value;

        const [error, msg] = IsValid[validationMethod](value);
        if(error) {
            errorList.push(msg);
        }
    }
    if(errorList.length){
        console.log(errorList);
    } else {
        console.log("You're good!");
        fetch(formDOM.action, {
            method: 'POST',
            body: JSON.stringify(formData),
        });
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

