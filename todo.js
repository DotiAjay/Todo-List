let todolist = [{
        text: "learn Html"
    },
    {
        text: "Js"
    },
    {
        text: "css"
    }

];

function add(item) {

    let todoContainer = document.getElementById("todoItemsContainer");
    let totdoElement = document.createElement('li');
    totdoElement.classList.add("todo-item-container", 'd-flex', 'd-row');
    todoContainer.appendChild(totdoElement);
    let todoCheck = document.createElement('input');
    todoCheck.type = "checkbox";
    todoCheck.id = "mybox";
    todoCheck.classList.add("checkbox-input");
    totdoElement.appendChild(todoCheck);
    let labelContainer = document.createElement('div');
    labelContainer.classList.add("label-container", "d-flex", 'd-row');
    totdoElement.appendChild(labelContainer);
    let label = document.createElement('label');
    label.setAttribute('for', 'mybox');
    label.textContent = item.text;
    label.classList.add("checkbox-label");
    labelContainer.appendChild(label);
    let deletContainer = document.createElement("div");
    deletContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deletContainer);
    let del = document.createElement("i");
    del.classList.add("far", 'fa-trash-alt', "delete-icon");
    deletContainer.appendChild(del);



}
for (let todo of todolist) {
    add(todo)
}
