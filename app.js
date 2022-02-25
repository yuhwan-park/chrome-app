const loginForm = document.querySelector("#logInForm");
const loginInput = document.querySelector(".loginInput");
const todoInput = document.querySelector(".toDoInput");
const todoForm = document.querySelector("#toDoForm");
const $link = document.querySelector("a");
const hello = document.querySelector("#hello");
const logOutButton = document.querySelector("#logOut");
const focusP = document.querySelector("#toDoForm div span");
const HIDDEN_CLASSNAME = "hidden";

function classListADD(target) {
  target.classList.add(HIDDEN_CLASSNAME);
}
function classListREMOVE(target) {
  target.classList.remove(HIDDEN_CLASSNAME);
}
function saveData(name) {
  classListADD(loginForm);
  classListREMOVE(hello);
  hello.innerHTML = "Hello " + name;
}
function alreadyHaveData() {
  classListREMOVE(logOutButton);
  classListREMOVE(todoInput);
  classListREMOVE(focusP);
}
function login(event) {
  const username = loginInput.value;
  event.preventDefault();
  saveData(username);
  localStorage.setItem("username", username);
  alreadyHaveData();
}
logOutButton.addEventListener("click", () => {
  localStorage.removeItem("username");
  classListREMOVE(loginForm);
  classListADD(hello);
  classListADD(logOutButton);
  classListADD(todoInput);
  classListADD(focusP);
});

if (localStorage.getItem("username") === null) {
  loginForm.addEventListener("submit", login);
} else {
  saveData(localStorage.getItem("username"));
  alreadyHaveData();
}
