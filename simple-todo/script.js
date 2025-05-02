const input = document.getElementById("input-box");
const todoContainer = document.getElementById("list-container");
const button = document.getElementById("button");

button.addEventListener("click", addTodo);

function addTodo(e) {
  e.preventDefault();
  if (input.value.trim().length <= 0) {
    alert("Please Enter Something Here");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;

    // delete button
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    todoContainer.append(li);
    input.value = "";
    saveTasks();
  }
}

todoContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveTasks();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTasks();
  }
});

// to save task
function saveTasks() {
  localStorage.setItem("tasks", todoContainer.innerHTML);
}

function showTasks() {
  todoContainer.innerHTML = localStorage.getItem("tasks") || "";
}

showTasks();
