function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        var li = document.createElement('li');
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <input type="checkbox" onchange="completeTask(this)">
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function completeTask(checkbox) {
    var listItem = checkbox.parentNode;
    listItem.classList.toggle('completed', checkbox.checked);
}
