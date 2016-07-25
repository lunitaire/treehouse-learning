//Problem: User interaction doesn't provide desired results
//Solution: Add interactivity so that the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-task"); //completed-tasks

//Add a new task
var addTask = function() {}
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
    //When the Delete button is pressed
        //Remove the parent list item from the ul
}

//Mark a task as complete
var taskCompleted = function() {
    //When the checkbox is checked
        //Append the task list item to the #completed-tasks
}

//Mark a task as incomplete
var taskIncomplete = function () {
    //When the checkbox is unchecked
        //Append the task list item to the #incomplete-tasks
}

