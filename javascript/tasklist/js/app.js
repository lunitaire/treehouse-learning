//Problem: User interaction doesn't provide desired results
//Solution: Add interactivity so that the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-task"); //completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString){
	//Create List Item
	var listItem = document.createElement("li");
    //input (checkbox)
    var checkbox = document.createElement("input");
    //label
    var label = document.createElement("label");
    //input (checkbox)
    var editInput = document.createElement("input");
    //button.edit
    var editButton = document.createElement("button");
    //button.delete
    var deleteButton = document.createElement("button");
    //Each element needs modifying 

    //Each element needs appending
    listItem.appendChild(checkbox);
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
    var listItem = createNewTaskElement("Some New Task");
    //Append listItem to incompleteTasksHolder
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

//Edit an existing task
var editTask = function() {
	console.log("Edit Task");
    //When the Edit button is pressed
        //if the class of the parent is .editMode
            //switch from .editMode
            //label text become the input's value
        //else
            //switch to .editMode
            //input value becomes the label's text


        //Toggle .editMode on the parent
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
var bindTaskEvents(taskListItem, checkboxEventHandler) {
	console.log("Bind list item events");
    //select taskListItem's children
    var checkbox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");
    //bind editTask to edit button
    editButton.onclick = editTask;
    //bind deleteTask to the delete button
    deleteTask.onclick = deleteTask;
    //bind checkboxEventHandler to checkbox
    checkbox.onchange = checkboxEventHandler;
}

//Set the click handler to the addTask function
addButton.onclick = addTask;

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