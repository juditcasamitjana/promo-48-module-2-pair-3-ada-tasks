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
const taskList = document.querySelector(".js-task-list");

//Cosas

const createTask = (task) => {
    return `<li id="${task.id}" class="${task.completed ? "completed" : ""}">
                <input type="checkbox" ${task.completed ? "checked" : ""}> ${
        task.name
    }
            </li>`;
};

const renderTasks = () => {
    taskList.innerHTML = "";
    for (const task of tasks) {
        taskList.innerHTML += createTask(task);
    }
};

const handleClick = (e) => {
    e.preventDefault();
    const taskName = inputAdd.value;
    const newTask = {
        name: taskName,
        completed: false,
        id: tasks.length + 1,
    };

    tasks.push(newTask);
    renderTasks();
};

btnAdd.addEventListener("click", handleClick);

renderTasks();
