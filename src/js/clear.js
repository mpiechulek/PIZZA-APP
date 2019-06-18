//jshint esversion:6


export function clearInputs() {
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++)
        inputs[i].value = '';
}