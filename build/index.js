"use strict";
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let tasks = [];
function addTask() {
    if (inputElement.value === "") {
        alert("Digite alguma tarefa!");
        return false;
    }
    else {
        let enterTask = inputElement.value;
        tasks.push(enterTask);
        inputElement.value = "";
        saveDatas();
    }
}
buttonElement.onclick = addTask;
function saveDatas() {
    localStorage.setItem("@list_tasks", JSON.stringify(tasks)); //convert to string and save to localStorege 
}
