//Problem: User interaction doesn't provide desired results
//Solution: Add interactivity so that the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-task"); //completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {
    //Create List Item
    var listItem = document.createElement("li");
    //input (checkBox)
    var checkBox = document.createElement("input");
    //label
    var label = document.createElement("label");
    //input (checkBox)
    var editInput = document.createElement("input");
    //button.edit
    var editButton = document.createElement("button");
    //button.delete
    var deleteButton = document.createElement("button");
    
    //Each element needs modifying 
    checkBox.type = "checkBox";
    editInput.type = "text";
  
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
  
    label.innerText = taskString;

    //Each element needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
  
    return listItem;
}

//Add a new task
var addTask = function() {
    console.log("Add Task");
    //Create a new list item with the text from #new-task:
    var listItem = createNewTaskElement(taskInput.value);
    //Append listItem to incompleteTasksHolder
    //Use if to prevent adding empty tasks
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    //setting input to blank
    taskInput.value = ""; 
}

//Edit an existing task
var editTask = function() {
    console.log("Edit Task");
    
    var listItem = this.parentNode;

    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");

    var containsClass = listItem.classList.contains("editMode");
    var button = listItem.querySelector("button.edit");

    //if the class of the parent is .editMode
    if (containsClass) {
        //switch from .editMode
        //label text become the input's value
        label.innerText = editInput.value;
        button.innerText = "Edit";
    } else {
        //switch to .editMode
        //input value becomes the label's text
        editInput.value = label.innerText;
        //change editButton to Save while editing
        button.innerText = "Save";
    }

    //Toggle .editMode on the listItem
    listItem.classList.toggle("editMode");
}

//Delete an existing task
var deleteTask = function() {
    console.log("Delete Task");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    //Remove the parent list item from the ul
    ul.removeChild(listItem);
}

//Mark a task as complete
var taskCompleted = function() {
    console.log("Task Complete");
    //Append the task list item to the #completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncompleted);
}

//Mark a task as incomplete
var taskIncomplete = function () {
    console.log("Task Incomplete");
    //Append the task list item to the #incomplete-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

//Pulling out of cycle to keep to DRY principles
var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    console.log("Bind list item events");
    //select taskListItem's children
    var checkBox = taskListItem.querySelector("input[type=checkBox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");
  
    //bind editTask to edit button
    editButton.onclick = editTask;
  
    //bind deleteTask to the delete button
    deleteTask.onclick = deleteTask;
  
    //bind checkBoxEventHandler to checkBox
    checkBox.onchange = checkBoxEventHandler;
}

//Test request for adding multiple events
var sampleRequest = function() {
    console.log("Test");
}

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", sampleRequest);



//cycle over incompleteTasksHolder ul list items
for(var index = 0; index < incompleteTasksHolder.children.length; index++) {
    //bind events to list item's children (taskCompleted)
    bindTaskEvents(incompleteTasksHolder.children[index], taskCompleted)
}

//cycle over completeTasksHolder ul list items
for(var index = 0; index < completedTasksHolder.children.length; index++) {
    //bind events to list item's children (taskIncompleted)
    bindTaskEvents(completedTasksHolder.children[index], taskIncomplete)
}