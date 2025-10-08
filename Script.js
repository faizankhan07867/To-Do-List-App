const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete">❌</button>
  `;
  
  li.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
      li.classList.toggle("completed");
    } else if (e.target.classList.contains("delete")) {
      li.remove();
    }
  });

  taskList.appendChild(li);
  input.value = "";
}
