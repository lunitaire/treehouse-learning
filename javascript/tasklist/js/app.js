//Problem: User interaction doesn't provide desired results
//Solution: Add interactivity so that the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-task"); //completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString){
	//Create List Item
	var listItem = ;
    //input (checkbox)
    //label
    //input (checkbox)
    //button.edit
    //button.delete
    //Each elements need to be modified and appended
    return listItem;
}

//Add a new task
var addTask = function() {}
    console.log("Add Task");
    //Create a new list item with the text from #new-task:
    var listItem = createNewTaskElement("Some New Task");
    //Append listItem to incompleteTasksHolder
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
    //When the Delete button is pressed
        //Remove the parent list item from the ul
}

//Mark a task as complete
var taskCompleted = function() {
	console.log("Task Complete");
    //When the checkbox is checked
        //Append the task list item to the #completed-tasks
}

//Mark a task as incomplete
var taskIncomplete = function () {
	console.log("Task Incomplete");
    //When the checkbox is unchecked
        //Append the task list item to the #incomplete-tasks
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