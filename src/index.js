

document.addEventListener("DOMContentLoaded", () => {

  const taskList = new TaskList();
 

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  const taskUl = document.getElementById("tasks");

  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());


  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
  
    e.target.reset();
    renderApp();
  });

  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });
});

class Task {
  constructor(description) {
    this.description = description;
  }

  render() {
    return `
      <li>
        ${this.description}
        <button data-description="${this.description}">X</button>
      </li>
      `;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
  }

  createNewTask(description) {
    const newTask = new Task(description);
    this.tasks.push(newTask);
  }

  renderTasks() {
    return this.tasks.map((task) => task.render()).join("");
  }

  deleteTask(description) {
    this.tasks = this.tasks.filter((task) => task.description !== description);
  }
}









































   // const form = document.getElementById("create-task-form");
  // const taskList = document.getElementById("tasks");
  // const taskDescription = document.getElementById("new-task-description");
  // const taskPriority = document.getElementById("new-task-priority");
  // const taskPriorityValue = taskPriority.options[taskPriority.selectedIndex] .value;
  // const taskPriorityColor = taskPriority.options[taskPriority.selectedIndex] .text;
  // const taskPriorityColorValue = taskPriority.options[taskPriority.selectedIndex] .value;
  // const taskPriorityColorText = taskPriority.options[taskPriority.selectedIndex] .text;
  

  // form.addEventListener("submit", function(event) {


  //   event.preventDefault();


  //   const newTask = document.createElement("li");
  //   newTask.innerText = taskDescription.value;
  //   taskList.appendChild(newTask);
  //   event.target.reset();

  //   const deleteButton = document.createElement("button");
  //   deleteButton.innerText = "X";
  //   newTask.appendChild(deleteButton);

  //   deleteButton.addEventListener("click", function(event) {
  //     newTask.remove();

  //   });


  //   }
  // );