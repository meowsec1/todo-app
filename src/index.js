console.log("Hello world!");

function toDoItemFactory(title, description, dueDate, priority) {
    let isComplete = false;
    return {
        title,
        description,
        dueDate,
        priority,
        isComplete,
        markComplete: () => !isComplete
    }
}

function projectFactory(title) {
    const toDos = [];
    return {
        title,
        deleteToDo(indexToRemove) {
            if (indexToRemove >= 0 && indexToRemove < toDos.length) {
                toDos.splice(indexToRemove, 1);
            }
        },
        addToDo(toDo) {
            toDos.push(toDo);
        },
        get toDos() {
            return [...toDos];
        }
    }
}

const item = toDoItemFactory("walk dog", "walk the dog today", "tomorrow", "high");
const schoolWork = projectFactory("School Work");
const realWork = projectFactory("Real Work");

realWork.addToDo(item);

console.log(realWork.toDos);
console.log(schoolWork.toDos);


console.log(item.markComplete());
