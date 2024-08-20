const taskList = [];

function addTask() {
    const taskInput = document.querySelector('.todo-input');
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

        renderList();
    }
}

function renderList() {
    let taskHTML = '';

    for (let i = 0; i < taskList.length; i++) {
        taskHTML += `<p>${taskList[i]}</p>\n`;
    }

    displayList(taskHTML);
}

function displayList(taskHTML) {
    const taskOutput = document.querySelector('.tasks');
    taskOutput.innerHTML = taskHTML;
}

addTask();
