const button = document.querySelector('button');
const buttonClickHandler = (event) => {
    alert("clicked");
    console.log(event)
}

const anotherButtonClickHandler = (event) => {
    alert("clicked");

}

//button.onclick = buttonClickHandler;
button.addEventListener('click', buttonClickHandler);
setTimeout(() => {
    button.removeEventListener('click', buttonClickHandler);
}, 3000);


const submit = document.querySelector("form")
const submitHander = (event) => {

    event.preventDefault();
    console.log(event);
}
submit.addEventListener("submit", submitHander);