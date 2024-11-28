const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("div");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");

  inputBox.addEventListener("input", updateStorage);

  let img = document.createElement("img");
  img.src = "images/delete.png";
  img.className = "delete-btn";
  img.addEventListener("click", deleteNote);

  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);

  updateStorage();
});

function deleteNote(e) {
  e.target.parentElement.remove();
  updateStorage();
}

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

notesContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    deleteNote(e);
  } else if (
    e.target.tagName === "DIV" &&
    e.target.classList.contains("input-box")
  ) {
    updateStorage();
  }
});

// Load notes from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
});
