## ToDoList App
Explains code structure and logic.
This todo app is made up of the following functions:

### addTodo function
-pass input as param (placeholder)
	const addTodo = (input) => {
-check input if it contains something
	if (input !== '') {
-create todo object with three properties
		const todo = {
			id: Date.now(),
			name: input,
			completed: false,
		};
-push new todo object (on input) to todos array
		todos.push(todo);
-render items by calling renderTodos function
		renderTodos();
-reset the textarea form
		todoForm.reset();
-reset form height
		messageBox.style.height = 'auto';
	}
};