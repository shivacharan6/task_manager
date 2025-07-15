document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskDate = document.getElementById("taskDate");

  const taskText = taskInput.value.trim();
  const dateValue = taskDate.value;

  if (taskText === "" || dateValue === "") {
    alert("Please enter both a task and a date.");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";

  const dateSpan = document.createElement("span");
  dateSpan.className = "task-date";
  dateSpan.textContent = formatDate(dateValue);

  const textSpan = document.createElement("span");
  textSpan.className = "task-text";

  const taskIcon = document.createElement("img");
  taskIcon.src = "https://cdn-icons-png.flaticon.com/512/1161/1161341.png";
  taskIcon.alt = "task";

  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskText;

  textSpan.appendChild(taskIcon);
  textSpan.appendChild(taskLabel);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "task-delete";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(dateSpan);
  li.appendChild(textSpan);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
  taskDate.value = "";
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}
