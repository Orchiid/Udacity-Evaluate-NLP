// scss file here
import './styles/style.scss'
//get the button for submit
import { handleSubmit } from "./js/handleSubmit.js";
const submit = document.querySelector('#submit')
// add event listener to it when the click to call handleSubmit function
window.addEventListener('DOMContentLoaded',() => {
    submit.addEventListener('click', () => {
        handleSubmit()
})})


