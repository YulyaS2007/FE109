"use strict";
let addTaskButton = document.querySelector('.add-task-button'),
    descriptionTask = document.querySelector('.description-task'),
    createTasks = document.querySelector('.create-tasks');

let tasksArr;

let todoItemElem = [];
 
if (!localStorage.tasksArr){
    //если localStorage - пустой, то наш массив тоже будет пустым
    tasksArr = [];
} else {
    //если localStorage - содержит ранее введенные данные, то мы забираем их в наш массив
    tasksArr = JSON.parse(localStorage.getItem('tasksArr'));
}

function Task(description) {
    this.description = description;
    this.completed = false;    //отмечаем выполнено ли действие
}

let createTasksAdd = (task, index) => {
    return `
        <div class="description-item" ${task.completed ? "checked" : ""}">
            <div class="description-item-text">${task.description}</div>
            <div class="buttons-item">
                <input onclick="completeTask(${index})" class="item-completed" type="checkbox" ${task.completed ? "checked" : ""}>
                <button onclick="itemDeleted(${index})" class="item-deleted"></button>
            </div>
        </div>
        `
    }

let filterTasks = () => {
    let activeTasks = tasksArr.length && tasksArr.filter(item =>item.completed == false);
    let completedTasks = tasksArr.length && tasksArr.filter(item =>item.completed == true);
    tasksArr = [...activeTasks,...completedTasks];
}

let fillToDoList = function() {
    createTasks.innerHTML = "";
    if(tasksArr.length > 0){
        filterTasks();
        tasksArr.forEach((element, index) => {
            //добавляем описание введенной задачи в заметки
            createTasks.innerHTML += createTasksAdd(element, index);
        });
        todoItemElem = document.querySelectorAll('.description-item');
    }
}

fillToDoList();

let updateLocal = function() {
    //загружаем введенные задачи в localStorage
    localStorage.setItem('tasksArr', JSON.stringify(tasksArr));
}
let completeTask = index => {
    console.log(index);
    tasksArr[index].completed = !tasksArr[index].completed;
    if(tasksArr[index].completed){
        todoItemElem[index].classList.add("checked");
    } else{
        todoItemElem[index].classList.remove("checked");
    }
    updateLocal();
    fillToDoList();
}

addTaskButton.addEventListener('click', function() {
    tasksArr.push(new Task(descriptionTask.value));
    updateLocal();
    fillToDoList();
    descriptionTask.value = ""; //плейсхолдер очищается после нажатия "создать"
})
let itemDeleted = index => {
    todoItemElem[index].classList.add("delition");
    setTimeout(() => {
        tasksArr.splice(index, 1);
        updateLocal();
        fillToDoList();
    },500)
    
}

