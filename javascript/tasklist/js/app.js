//Problem: User interaction doesn't provide desired results
//Solution: Add interactivity so that the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-task"); //completed-tasks

//Add a new task
var addTask = function() {}
    console.log("Add Task");
    //When the button is pressed
    //Create a new list item with the text from #new-task:
        //input (checkbox)
        //label
        //input (checkbox)
        //button.edit
        //button.delete
        //Each elements need to be modified and appended
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

var bindTaskEvents(taskListItem, checkboxEventHandler) {
    //select its children
    //bind editTask to edit button
    //bind deleteTask to the delete button
    //bind checkboxEventHandler to checkbox

}

//Set the click handler to the addTask function
addButton.onclick = addTask;

//cycle over incompleteTasksHolder ul list items
    //for each list item
        //bind events to list item's children (taskCompleted)

//cycle over completeTasksHolder ul list items
    //for each list item
        //bind events to list item's children (taskIncompleted)
