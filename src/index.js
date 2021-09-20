import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div create
  const todoItem = createTodoItem();
  // p create
  const todo = createTodo(inputText);
  todoItem.append(todo);
  // completed button
  //   const completed = createButton("completed", "完了");
  //   completed.addEventListener("click", () => {
  //     const todoItem = createTodoItem();
  //     const todoText = completed.previousSibling.innerText;
  //     //削除ボタンの親タグを削除する。
  //     deleteFromList(completed.closest(".list-row"), "incompleted-list");
  //     // itemにtodoをセット
  //     todoItem.append(createTodo(todoText));
  //     const back = createButton("back", "戻す");
  //     back.addEventListener("click", () => {
  //       const todoItem = createTodoItem();
  //       const todoText = back.previousSibling.innerText;
  //       //削除ボタンの親タグを削除する。
  //       deleteFromList(back.closest(".list-row"), "completed-list");
  //       todoItem.append(createTodo(todoText));
  //       todoItem.append(createRemoveButton());
  //       // li create
  //       const list = createTodoList();
  //       list.appendChild(todoItem);
  //       document.getElementById("incompleted-list").appendChild(list);
  //     });
  //     todoItem.append(back);
  //     // li create
  //     const list = createTodoList();
  //     list.appendChild(todoItem);
  //     document.getElementById("completed-list").appendChild(list);
  //   });

  todoItem.appendChild(todo);
  todoItem.appendChild(createCompletedButton());
  todoItem.appendChild(createRemoveButton());

  // li create
  const list = createTodoList();
  list.appendChild(todoItem);

  document.getElementById("incompleted-list").appendChild(list);
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

const createRemoveButton = () => {
  const remove = createButton("remove", "削除");
  remove.addEventListener("click", () => {
    //削除ボタンの親タグを削除する。
    deleteFromList(remove.closest(".list-row"), "incompleted-list");
  });
  return remove;
};

const createCompletedButton = () => {
  const completed = createButton("completed", "完了");
  completed.addEventListener("click", () => {
    const todoItem = createTodoItem();
    const todoText = completed.parentNode.firstElementChild.innerText;
    //削除ボタンの親タグを削除する。
    deleteFromList(completed.closest(".list-row"), "incompleted-list");
    // itemにtodoをセット
    todoItem.append(createTodo(todoText));
    const back = createButton("back", "戻す");
    back.addEventListener("click", () => {
      const todoItem = createTodoItem();
      const todoText = back.parentNode.firstElementChild.innerText;
      //削除ボタンの親タグを削除する。
      deleteFromList(back.closest(".list-row"), "completed-list");
      todoItem.append(createTodo(todoText));
      todoItem.append(createCompletedButton());
      todoItem.append(createRemoveButton());
      // li create
      const list = createTodoList();
      list.appendChild(todoItem);
      document.getElementById("incompleted-list").appendChild(list);
    });
    todoItem.append(back);
    // li create
    const list = createTodoList();
    list.appendChild(todoItem);
    document.getElementById("completed-list").appendChild(list);
  });
  return completed;
};
