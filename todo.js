const todolist = document.querySelector("#todo_list");
let toDos = [];

function deleteTodo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  toDoData();
  li.remove();
}
function toDoData() {
  localStorage.setItem("todo", JSON.stringify(toDos));
}

function paintTodo(Todo) {
  const li = document.createElement("li");
  li.id = Todo.id;
  const span = document.createElement("span");
  span.innerHTML = Todo.text;
  const button = document.createElement("button");
  li.classList.add("col-2");
  button.classList.add("icon");
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click", deleteTodo);
  todolist.appendChild(li);
}

todoForm.addEventListener("submit", (event) => {
  if (toDos.length >= 10) {
    event.preventDefault();
    alert("STOP! You have too much to do. Let's do what you have to do first.");
  } else {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = { id: Date.now(), text: newTodo };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    toDoData();
  }
});

const savedtoDos = localStorage.getItem("todo");

if (savedtoDos) {
  const parsetoDo = JSON.parse(savedtoDos);
  toDos = parsetoDo;
  parsetoDo.forEach(paintTodo);
}
