
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", function() {
     const taskName = taskInput.value.trim();
    if (taskName) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        const taskNameSpan = document.createElement("span");
        taskNameSpan.classList.add("task-name");
        taskNameSpan.textContent = taskName;
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Elimina";
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(taskItem);
        });
        taskNameSpan.addEventListener("click", function() {
            taskNameSpan.classList.toggle("completed");
        });
        taskItem.appendChild(taskNameSpan);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value = "";
        addButton.disabled = true;
    }
});

taskInput.addEventListener("input", function() {
    const taskName = taskInput.value.trim();
    if (taskName) {
        addButton.disabled = false;
    } else {
        addButton.disabled = true;
    }
});
addButton.disabled = true;