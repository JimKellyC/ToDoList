const tasks = [
  //{ title: "Project 1"}
]; // Array to hold task items

document.getElementById("submitBtn").onclick = function () {
  const inputValue = document.getElementById("myInput").value;

  // Add the input value to the tasks array
  if (inputValue.trim() !== "") {
    tasks.push({ title: inputValue }); // Add new task to the array

    const newTaskItem = document.createElement("div");
    newTaskItem.className = "task-item"; // Add a class for styling
    newTaskItem.innerHTML = `
      <div class="task-item">${inputValue}</div>
      <button class="complete-btn action-btn">Complete</button>
      <button class="delete-btn action-btn">Delete</button>
    `;
    newTaskItem
      .querySelector(".delete-btn")
      .addEventListener("click", function () {
        newTaskItem.remove();
        tasks.splice(
          tasks.findIndex((task) => task.title === inputValue),
          1
        ); // Remove task from the array
      });
    document.getElementById("task-list").appendChild(newTaskItem);

    document.getElementById("myInput").value = ""; // Clear input field
  }
};

// Function to render tasks from the tasks array
document.getElementById("task-list").addEventListener("click", function (event) {
  if (event.target.classList.contains("complete-btn")) {
    const taskItem = event.target.parentElement;
    taskItem.querySelector(".task-item").classList.toggle("completed");
    event.target.textContent = event.target.textContent === "Complete" ? "Undo" : "Complete";
  }
});