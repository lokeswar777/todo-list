const addBtn = document.getElementById("add_btn");
const input = document.getElementById("task_input");

const taskDisplay = document.createElement("div");
taskDisplay.className = "tasks";
document.body.appendChild(taskDisplay);


function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Empty task!");
    return;
  }

  // Create task element
  const taskEl = document.createElement("div");
  taskEl.className = "task_item";
  taskEl.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✕";
  deleteBtn.className = "delete_btn";
  deleteBtn.onclick = () => taskDisplay.removeChild(taskEl);

  taskEl.appendChild(deleteBtn);
  taskDisplay.appendChild(taskEl);

  // Clear input
  input.value = "";
}

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on pressing Enter
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
