const taskList = [
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

function renderList() {
    let taskHTML = '';

    for (let i = 0; i < taskList.length; i++) {
        let taskObject = taskList[i];

        taskHTML += `<div class="task-row">
            <div>${taskObject.task}</div>
            <div>${taskObject.date}</div>
            <button class="delete-btn">DELETE</button>
        `;
    }

    displayList(taskHTML);
}

function displayList(taskHTML) {
    const taskOutput = document.querySelector('.task-container');
    taskOutput.innerHTML = taskHTML;
}

addTask();
