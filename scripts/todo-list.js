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
        taskList.push(taskInput.value);
        taskInput.value = '';
        console.log(dateInput.value);

        renderList();
    }
}

function renderList() {
    let taskHTML = '';
    let dateHTML = '';

    for (let i = 0; i < taskList.length; i++) {
        let taskObject = taskList[i];
        taskHTML += `<p>${taskObject.task}</p>\n`;
        dateHTML += `<p>${taskObject.date}</p>`;
    }

    displayList(taskHTML, dateHTML);
}

function displayList(taskHTML, dateHTML) {
    const taskOutput = document.querySelector('.tasks');
    const dateOutput = document.querySelector('.dates');
    taskOutput.innerHTML = taskHTML;
    taskOutput.innerHTML += dateHTML;
}

addTask();
