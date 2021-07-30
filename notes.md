## ToDoList App
Explains code structure and logic.
This todo app is made up of the following elements, events, and functions:

### elements

	``` javascript
	let todos = [];
	const todoForm = document.querySelector('.todo-form');
	const input = document.querySelector('.todo-input');
	let messageBox = document.querySelector('#message-box');
	const ul = document.getElementById('todoList');
	```
	
### event: Submit form

- Append form element to submit event listener.
- Prevent form default  (submitting form action)
- Call addTodo function with input.value argument
	``` javascript
		todoForm.addEventListener('submit', function (e) {
			e.preventDefault();
			addTodo(input.value);
		});
	```
### event: Update height of textarea on input.

- Append textarea id to input event listener.
- Call UpdateHeight function and pass this as argument.
	``` javascript
		messageBox.addEventListener('input', function () {
			updateHeight(this);
		});
	```
### updateHeight function

- Pass element as param. Makes function reusable.
	``` javascript
		var updateHeight = (element) => {
	```
- Get scroll height. Append to element. Set all equal to variable.
	``` javascript
			var scroll_height = element.scrollHeight;
	```
- Set style height equal to scroll height.
	``` javascript
			element.style.height = scroll_height + 'px';
		};
	```
### addTodo function

- Pass input as param (placeholder)
	``` javascript
			const addTodo = (input) => {
	```
- Check input if it contains something
	``` javascript
			if (input !== '') {
	```
- Create todo object with three properties
	``` javascript
			const todo = {
				id: Date.now(),
				name: input,
				completed: false,
			};
	```
- Push new todo object (on input) to todos array
	``` javascript
			todos.push(todo);
	```
- Render items by calling renderTodos function
	``` javascript
			renderTodos();
	```
- Reset the textarea form
	``` javascript
			todoForm.reset();
	```
- Reset form height
	``` javascript
			messageBox.style.height = 'auto';
			}
		};
	```
### renderTodos function

- Create renderTodos function.
	``` javascript
		const renderTodos = () => {
	```
- Because always iterating through array, each time need to clear html of ul before writing to it again. 
	``` javascript
			ul.innerHTML = '';
	```
- Loop through each todo item. Item can be named anything.
	``` javascript
			todos.forEach((item) => {
	```
- Set list element.
	``` javascript
				let li = document.createElement	
				('LI'); 
	```
- Set attribute class for list.
	``` javascript
				li.setAttribute('class', 'item');
	```
- Set attribute data for list.
	``` javascript
				li.setAttribute('data-key', item.id);
	```
- call function expressions to create text,  create checkbox, and create delete button. Set to variables.
	``` javascript
				const itemText = createTodoText(item);
				const cb = buildCheckbox(item);
				const db = buildDeleteButton(item);
	```
- Append function expressions to list.
	``` javascript
				li.append(cb);
				li.append(db);
				li.append(itemText);
	```
- Append list to un-ordered list.
	``` javascript
				ul.append(li);
	```
- Update height of textarea. itemText is argument from updateHeight function param.
	``` javascript
				updateHeight(itemText);
			});
		};
	```
