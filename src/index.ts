let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLElement;

let tasks: string[] = [];

function addTask(){
    if(inputElement.value ===""){
        alert("Digite alguma tarefa!");
        return false;
    }else{
        let enterTask: string = inputElement.value;
        tasks.push(enterTask);
        inputElement.value = "";

        saveDatas();
    }
}

buttonElement.onclick = addTask;

function saveDatas(){
    localStorage.setItem("@list_tasks", JSON.stringify(tasks));//convert to string and save to localStorege 
}

