import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div create
  const todoItem = document.createElement("div");
  todoItem.className = "todo-item";
  // p create
  const todo = document.createElement("p");
  todo.className = "todo";
  todo.innerText = inputText;
  todoItem.appendChild(todo);
  // li create
  const list = document.createElement("li");
  list.className = "list-row";
  list.appendChild(todoItem);
  console.log(list);

  const complate = document
    .getElementById("imcompleted-list")
    .appendChild(list);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
