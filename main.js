//Input Todo
//1. Add in variables elements for textInput, colorInput and addButton
//2. Make a eventListener for addButton
//3. MAKE SURE TO ADD event.preventDefault!!!
//4. Add in code to create a newTodo using the same pattern as you buttons.
//5. Set the text and background color of the todo to textInput.value and colorInput.value

var deleteButton = document.getElementById("deleteButton");
var todoItems = document.getElementById("todoItems");

/*YOUR CODE*/











/*YOUR CODE ENDS*/


//The todo Buttons
var numberOfButtons = 4;
for (var i = 0; i < numberOfButtons; i++) {
  var button = document.getElementById("todoButton" + (i + 1));

  button.addEventListener('click', function () {
    var newTodo = document.createElement("div");
    newTodo.innerHTML = button.innerHTML;
    newTodo.className = "todo";

    lastTodo = newTodo;
    todoItems.appendChild(newTodo);
  });
}

deleteButton.addEventListener('click', function () {
  var allTodos = document.querySelectorAll('.todo');
  if (allTodos.length > 0) {
    var lastTodo = allTodos[allTodos.length - 1];
    lastTodo.remove();
  }
});