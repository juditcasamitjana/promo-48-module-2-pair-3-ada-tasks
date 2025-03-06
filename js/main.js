"use strict";

const tasks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    {
        name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
        completed: false,
        id: 4,
    },
];

const inputAdd = document.querySelector(".js-input__add");
const btnAdd = document.querySelector(".js-btn__add");

const handleClick = (e) => {
    e.preventDefault();
    const task = inputAdd.value;
    console.log(task);
};

btnAdd.addEventListener("click", handleClick);
