import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addIncompeteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const deleteFromList = (target, id) => {
  document.getElementById(id).removeChild(target);
};

// list create
const createTodoList = () => {
  const list = document.createElement("list");
  list.className = "list-row";
  return list;
};

// div create
const createTodoItem = () => {
  const todoItem = document.createElement("div");
  todoItem.className = "todo-item";
  return todoItem;
};
// p create
const createTodo = (inputText) => {
  const todo = document.createElement("p");
  todo.className = "todo";
  todo.innerText = inputText;
  return todo;
};
// button
const createButton = (className, buttonName) => {
  const button = document.createElement("button");
  button.className = className;
  button.innerText = buttonName;
  return button;
};

const getTodoText = (e) => {
  return e.parentNode.firstElementChild.innerText;
};
const addIncompeteList = (inputText) => {
  // div create
  const todoItem = createTodoItem();
  // p create
  const todo = createTodo(inputText);
  todoItem.append(todo);
  todoItem.appendChild(todo);
  // completed button
  const completed = createButton("completed", "完了");
  completed.addEventListener("click", () => {
    const todoItem = createTodoItem();
    todoItem.append(createTodo(getTodoText(completed)));
    const back = createButton("back", "戻す");
    back.addEventListener("click", () => {
      addIncompeteList(getTodoText(back));
      deleteFromList(back.closest(".list-row"), "completed-list");
    });
    todoItem.append(back);
    // li create
    const list = createTodoList();
    list.appendChild(todoItem);
    deleteFromList(completed.closest(".list-row"), "incompleted-list");
    document.getElementById("completed-list").appendChild(list);
  });
  todoItem.append(completed);
  // remove button
  const remove = createButton("remove", "削除");
  remove.addEventListener("click", () => {
    deleteFromList(remove.closest(".list-row"), "incompleted-list");
  });
  todoItem.append(remove);

  // li create
  const list = createTodoList();
  list.appendChild(todoItem);

  document.getElementById("incompleted-list").appendChild(list);
};
