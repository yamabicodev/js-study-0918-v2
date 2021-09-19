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
  // button
  const completed = document.createElement("button");
  completed.className = "completed";
  completed.innerText = "完了";
  completed.addEventListener("click", () => {
    //削除ボタンの親タグを削除する。
    deleteFromIncompleteList(completed.parentNode.parentNode);
  });

  const remove = document.createElement("button");
  remove.className = "remove";
  remove.innerText = "削除";
  remove.addEventListener("click", () => {
    //削除ボタンの親タグを削除する。
    deleteFromIncompleteList(remove.parentNode.parentNode);
  });

  todoItem.appendChild(todo);
  todoItem.appendChild(completed);
  todoItem.appendChild(remove);

  document.getElementById("imcompleted-list").appendChild(list);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const deleteFromIncompleteList = (target) => {
  document.getElementById("imcompleted-list").removeChild(target);
};
