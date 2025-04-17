const addBtn = document.getElementById("add_btn");
const input = document.getElementById("task_input");

const taskDisplay = document.createElement("div");
taskDisplay.className = "tasks";
document.body.appendChild(taskDisplay);

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(createTaskElement);

// Function to create and add task element to the DOM
function createTaskElement(taskText) {
  const taskEl = document.createElement("div");
  taskEl.className = "task_item";
  taskEl.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✕";
  deleteBtn.className = "delete_btn";
  deleteBtn.onclick = () => {
    taskDisplay.removeChild(taskEl);
    tasks = tasks.filter((t) => t !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  taskEl.appendChild(deleteBtn);
  taskDisplay.appendChild(taskEl);
}

// Add task
function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Empty task!");
    return;
  }

  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  createTaskElement(taskText);

  input.value = "";
}

// Event listeners
addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
