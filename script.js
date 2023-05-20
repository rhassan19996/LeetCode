document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("show-nav");
});

var buttons = document.querySelectorAll("button");
var activeButton = null;

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var contentId = button.id.replace("Button", "Content");
    var contentElement = document.getElementById(contentId);

    if (contentElement.style.display === "none") {
      // Show the content and set the button as active
      if (activeButton && activeButton !== button) {
        var activeContentId = activeButton.id.replace("Button", "Content");
        var activeContentElement = document.getElementById(activeContentId);
        activeContentElement.style.display = "none";
        activeButton.classList.remove("active");
      }
      contentElement.style.display = "block";
      button.classList.add("active");
      activeButton = button;
    } else {
      // Hide the content and remove the active state from the button
      contentElement.style.display = "none";
      button.classList.remove("active");
      activeButton = null;
    }
  });
});
const tasks = [
  {
    name: "Task 1",
    completed: false,
    tableData: [["Two Sum", "Easy", "15 mins"]],
  },
  {
    name: "Task 2",
    completed: false,
    tableData: [
      ["Data 5", "Data 6"],
      ["Data 7", "Data 8"],
    ],
  },
  {
    name: "Task 3",
    completed: false,
    tableData: [
      ["Data 9", "Data 10"],
      ["Data 11", "Data 12"],
    ],
  },
  {
    name: "Task 4",
    completed: false,
    tableData: [
      ["Data 13", "Data 14"],
      ["Data 15", "Data 16"],
    ],
  },
  {
    name: "Task 5",
    completed: false,
    tableData: [
      ["Data 17", "Data 18"],
      ["Data 19", "Data 20"],
    ],
  },
];

function generateTaskList(tasks) {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      completeTask(index);
    });

    const taskName = document.createElement("span");
    taskName.classList.add("task-name");
    taskName.textContent = task.name;

    const taskTable = document.createElement("table");
    taskTable.classList.add("task-table");

    task.tableData.forEach((rowData) => {
      const row = document.createElement("tr");
      rowData.forEach((cellData) => {
        const cell = document.createElement("td");
        cell.textContent = cellData;
        row.appendChild(cell);
      });
      taskTable.appendChild(row);
    });

    taskElement.appendChild(checkbox);
    taskElement.appendChild(taskName);
    taskElement.appendChild(taskTable);

    if (task.completed) {
      taskElement.classList.add("completed");
    }

    taskList.appendChild(taskElement);
  });
}

function completeTask(taskIndex) {
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  generateTaskList(tasks);
  updateProgressBar();
}

function updateProgressBar() {
  const progress = document.querySelector(".progress");
  const completedTasks = tasks.filter((task) => task.completed).length;
  const progressPercentage = (completedTasks / tasks.length) * 100;
  progress.style.width = progressPercentage + "%";
}

generateTaskList(tasks);
updateProgressBar();
