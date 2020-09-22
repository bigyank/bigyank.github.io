const addToDo = (e) => {
  e.preventDefault();
  // get form input
  const formInput = document.getElementById("item");

  const newToDo = formInput.value;

  // get todo list
  const todoList = document.getElementById("items");

  const newItem = document.createElement("li");
  newItem.className = "list-group-item";

  newItem.textContent = newToDo;

  // add button
  const button = document.createElement("button");
  button.className = "btn btn-danger btn-sm float-right delete";

  // add icon
  const icon = document.createElement("i");
  icon.className = "fas fa-trash";

  button.appendChild(icon);

  newItem.appendChild(button);
  todoList.appendChild(newItem);

  // reset input
  formInput.value = "";
};

// get form and listen to submit event
const form = document.getElementById("addForm");
form.addEventListener("submit", addToDo);

// get all delete buttons and listen to click

const removeItem = (e) => {
  if (e.target.classList.contains("delete")) {
    const li = e.target.parentElement;
    li.remove();
  }
};

const allItems = document.getElementById("items");
allItems.addEventListener("click", removeItem);

// filter items

const filterToDo = (e) => {
  const searchTerm = e.target.value.toLowerCase();

  const allList = document.querySelectorAll("li");
  Array.from(allList).map((li) => {
    const todoTitle = li.firstChild.textContent;
    if (todoTitle.toLowerCase().includes(searchTerm)) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
};

const filterInput = document.getElementById("filter");
filterInput.addEventListener("keyup", filterToDo);
