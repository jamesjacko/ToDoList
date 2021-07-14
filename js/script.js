// select DOM elements
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoItemsList = document.querySelector('.todo-items');

// array which stores every todo item
// each item will be an object with id, name, completed boollean
let todos = [];

// add an event listener on form
todoForm.addEventListener('submit', function (e) {
	e.preventDefault();
	// input param from addTodo is todoInput.value
	addTodo(todoInput.value);
});

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('checkbox')) {
		if (e.target.checked) e.target.closest('.item').classList.add('checked');
		else e.target.closest('.item').classList.remove('checked');
	}
});

function addTodo(input) {
	if (input !== '') {
		const todo = {
			id: Date.now(),
			name: input,
			completed: false,
		};
		todos.push(todo);
		addToLocalStorage(todos);
		todoInput.value = '';
	}
}

// todos is passed as parameter because it exists outside function environment
function renderTodos(todos) {
	// clear list
	todoItemsList.innerHTML = '';
	// run through each item inside todos
	todos.forEach((item) => {
		// checkbox
		let cb = document.createElement('input');
		cb.type = 'checkbox';
		cb.classList.add('checkbox');
		cb.checked = false;
		// delete button
		const deleteButton = document.createElement('button');
		deleteButton.className = 'delete-button';
		deleteButton.innerText = 'x';
		// lists
		const li = document.createElement('li');
		li.classList.add('item');
		li.setAttribute('data-key', item.id);
		li.appendChild(cb);
		li.append(item.name);
		li.append(deleteButton);
		todoItemsList.append(li);
	});
}

// add todos to local storage
function addToLocalStorage(todos) {
	// name key 'todos" and value todos array
	// convert array to string and store it
	localStorage.setItem('todos', JSON.stringify(todos));
	renderTodos(todos);
}

function getFromLocalStorage() {
	const reference = localStorage.getItem('todos');
	if (reference) {
		// converts string back to an array and store in todos array
		todos = JSON.parse(reference);
		renderTodos(todos);
	}
}

getFromLocalStorage();
