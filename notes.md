## ToDoList App
Explains code structure and logic.
This todo app is made up of the following functions:

### addTodo function

- Pass input as param (placeholder)

			const addTodo = (input) => {

- Check input if it contains something

			if (input !== '') {

- Create todo object with three properties

			const todo = {
				id: Date.now(),
				name: input,
				completed: false,
			};

- Push new todo object (on input) to todos array

			todos.push(todo);

- Render items by calling renderTodos function

			renderTodos();

- Reset the textarea form

			todoForm.reset();

- Reset form height

			messageBox.style.height = 'auto';
			}
		};

### renderTodos function

- Create renderTodos function.

		const renderTodos = () => {

- Clear html of ul before writing to it again.

			ul.innerHTML = '';
- Loop through each todo item. Item can be named anything.

			todos.forEach((item) => {

- Set list element.

				let li = document.createElement	
				('LI'); 

- Set attribute class for list.

				li.setAttribute('class', 'item');

- Set attribute data for list.

				li.setAttribute('data-key', item.id);

- call function expressions to create text,  create checkbox, and create delete button. Set to variables.

				const itemText = createTodoText(item);
				const cb = buildCheckbox(item);
				const db = buildDeleteButton(item);

- Append function expressions to list.

				li.append(cb);
				li.append(db);
				li.append(itemText);

- Append list to un-ordered list.

				ul.append(li);

- Update height of textarea. itemText is argument from updateHeight function param.

				updateHeight(itemText);
			});
		};