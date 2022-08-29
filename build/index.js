"use strict";
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let listSave = localStorage.getItem("@list_tasks");
let tasks = listSave !== null && JSON.parse(listSave) || []; //check if empty
function listTask() {
    listElement.innerHTML = "";
    tasks.map(item => {
        let allElement = document.createElement("li"); //create element 
        let taskText = document.createTextNode(item); //add text in []
        allElement.appendChild(taskText); //relating element and text
        listElement.appendChild(allElement); //add in html element
    });
}
listTask(); //to execute
function addTask() {
    if (inputElement.value === "") {
        alert("Digite alguma tarefa!");
        return false;
    }
    else {
        let enterTask = inputElement.value;
        tasks.push(enterTask);
        inputElement.value = "";
        listTask();
        saveDatas();
    }
}
buttonElement.onclick = addTask;
function saveDatas() {
    localStorage.setItem("@list_tasks", JSON.stringify(tasks)); //convert to string and save to localStorege 
}
