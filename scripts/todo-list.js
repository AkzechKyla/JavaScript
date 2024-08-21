const taskList = JSON.parse(localStorage.getItem('taskList')) || [
    {
        task: 'this is a task',
        date: '2024-08-21'
    }
];

renderList();

function addTask() {
    const taskInput = document.querySelector('.todo-input');
    const dateInput = document.querySelector('.date-input');
    const addBtn = document.querySelector('.add-btn');

    addBtn.addEventListener('click', () => addInTaskList());
    taskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addInTaskList();
        }
    });

    function addInTaskList() {
        let taskObject = {
            task: taskInput.value,
            date: dateInput.value
        }
        taskList.push(taskObject);
        taskInput.value = '';
        dateInput.value = '';

        renderList();
    }
}

function deleteTask(i) {
    taskList.splice(i, 1);
    renderList();
}

function renderList() {
    let taskHTML = '';

    for (let i = 0; i < taskList.length; i++) {
        let taskObject = taskList[i];

        taskHTML += `<div class="task-row">
            <div>${taskObject.task}</div>
            <div>${taskObject.date}</div>
            <button class="delete-btn" onclick="deleteTask(${i})">DELETE</button>
        `;
    }

    displayList(taskHTML);
    saveToLocalStorage();
}

function displayList(taskHTML) {
    const taskOutput = document.querySelector('.task-container');
    taskOutput.innerHTML = taskHTML;
}

function saveToLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(taskList));
}

addTask();
