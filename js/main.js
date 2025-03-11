"use strict";

/*const tasks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    {
        name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
        completed: false,
        id: 4,
    },
];*/

const inputAdd = document.querySelector(".js-input__add"); // input
const btnAdd = document.querySelector(".js-btn__add"); // button
const taskList = document.querySelector(".js-task__list"); // ul
const btnSearch = document.querySelector(".js-btn__search"); // button
const inputSearch = document.querySelector(".js-input__search"); // input

const createTask = (task) => {
    //interpolación
    return `<li class="${task.completed ? "completed" : ""}">
                <input type="checkbox" id="${task.id}" ${
        task.completed ? "checked" : ""
    }> ${task.name}
            </li>`;
};

/*const renderTasks = (tasks) => {
    //pinta las tareas que nos han dado
    taskList.innerHTML = "";
    for (const task of tasks) {
        taskList.innerHTML += createTask(task);
    }
};*/

const handleClick = (e) => {
    //añade tarea nueva al array y la pinta
    e.preventDefault();

    const taskName = inputAdd.value;
    const newTask = {
        name: taskName,
        completed: false,
        id: tasks.length + 1,
    };

    tasks.push(newTask);
    renderTasks(tasks); //Pinta las nuevas tareas
};

const handleClickList = (e) => {
    const taskId = parseInt(e.target.id);
    // console.log(taskId);
    if (!taskId) return;
    const task = tasks.find((task) => task.id === taskId); // Busca la tarea que tenga el id `taskId` en el array `tasks`
    task.completed = !task.completed; // Una vez que has obtenido la tarea, actualiza la propiedad `completed`
    renderTasks(tasks); // Pinta de nuevo las tareas en el html
};

const handleClickSearch = (e) => {
    e.preventDefault();
    const newSearch = inputSearch.value; // Obtén el valor del input de filtrar
    const filteredTasks = tasks.filter((task) => task.name.includes(newSearch)); // Filtra las tareas que coinciden con el valor introducido por el usuario
    renderTasks(filteredTasks); //Vuelve a pintar las tareas, esta vez utilizando el listado filtrado
};

btnAdd.addEventListener("click", handleClick); //escucha los clicks sobre btnAdd
taskList.addEventListener("click", handleClickList); //escucha los clicks de los checkbox
btnSearch.addEventListener("click", handleClickSearch);

//renderTasks(tasks); // Pinta las tareas dadas en el array en el html

const GITHUB_USER = "Loreto94";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;
let tasks = [];
/*fetch("https://dev.adalab.es/api/todo");
    .then(response => response.json())
    .then(data => {
        console.log(data);

    })*/

// fetch(SERVER_URL)
//     .then((response) => response.json())
//     .then((data) => {
//         tasks = data.results;
//         renderTasks(tasks);
//         console.log(tasks);
//     });

const renderTasks = (tasks) => {
    //pinta las tareas que nos han dado
    taskList.innerHTML = "";
    for (const task of tasks) {
        taskList.innerHTML += createTask(task);
    }
};

// renderTasks();

const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"));

if (tasksLocalStorage !== null) {
    tasks = tasksLocalStorage; // si (existe el listado de tareas en Local Storage)
    // pinta la lista de tareas almacenadas en tasksLocalStorage
    renderTasks(tasks);
} else {
    //sino existe el listado de tareas en el local storage
    // pide los datos al servidor
    fetch(SERVER_URL)
        .then((response) => response.json())
        .then((data) => {
            tasks = data.results.name;
            //guarda el listado obtenido en el Local Storage
            const kjhgjh = localStorage.setItem("tasks", JSON.stringify(tasks));
            // pinta la lista de tareas
            renderTasks(tasks);
        })
        .catch((error) => {
            console.error(error);
        });
}
