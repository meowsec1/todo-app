import { toDoItemFactory, projectFactory } from "../models/models.js";




export function renderProject(project) {
    const projectContainer = document.querySelector(".main-container");
    const proj = document.createElement('div');
}





// const listItems = document.querySelectorAll("li");

// for (let listItem of listItems) {
//     listItem.addEventListener("click", () => {
//         listItem.classList.toggle("checked");
//     })
// }
// update status

const trashButtons = document.querySelectorAll(".trash-button")

for (let trashButton of trashButtons) {
    trashButton.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("Clicked trash")
        trashButton.parentElement.remove()
    })
}


const newProjectButton = document.querySelector(".new-project-button");

newProjectButton.addEventListener("click", () => {
    // display form to make project
    console.log("Hi")
})