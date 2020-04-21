document.addEventListener("DOMContentLoaded", () => {

  const new_task_submission = document.getElementById("new-task-submit");
  const task_deletion = document.getElementById("delete-task");

  new_task_submission.addEventListener("click", function(event) {
    event.preventDefault();
    addItem()
  });

  task_deletion.addEventListener("click", function(event) {
    event.preventDefault();
    deleteItem()
  })
});

function addItem() {
  let newText = document.getElementById('new-task-description');
  if (newText.value === "") {
    emptyTaskAlert()
  } else {
    let tasks = document.getElementById('tasks');
    let newItem = document.createElement('li');
    let selectMenu = document.getElementById('priority-select');
    let priority = selectMenu.options[selectMenu.selectedIndex].value;

    newItem.innerText = newText.value;
    newItem.style.color = priority;

    tasks.appendChild(newItem);

    newText.value = ""
  }
};

function deleteItem() {
  let tasks = document.getElementById('tasks'); //make this DRYer
  tasks.removeChild(tasks.lastElementChild)
};

function emptyTaskAlert() {
  window.alert("Cannot Add Empty Task")
}