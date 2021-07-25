// select DOM elements
const todoForm = document.querySelector('.todo-form');
const addButton = document.querySelector('.add-button');
const input = document.querySelector('.todo-input');
const ul = document.getElementById('todoList');

let todos = [];

todoForm.addEventListener('submit', function (e) {
	e.preventDefault();
	addTodo(input.value);
});

input.addEventListener('input', function () {
	growText();
});

const growText = () => {
	if (input.value.length % input.cols < 1) {
		input.rows = input.value.length / input.cols + 1;
	}
};

const addTodo = (input) => {
	if (input !== '') {
		const todo = {
			id: Date.now(),
			name: input,
			completed: false,
		};
		todos.push(todo);
		renderTodos();
		todoForm.reset();
	}
};

const renderTodos = () => {
	ul.innerHTML = '';
	todos.forEach((item) => {
		let li = document.createElement('LI');
		li.setAttribute('class', 'item');
		li.setAttribute('data-key', item.id);
		const itemText = createTodoText(item);
		const cb = buildCheckbox(item);
		const db = buildDeleteButton(item);
		li.append(cb);
		li.append(db);
		li.append(itemText);
		ul.append(li);
	});
};

const createTodoText = (todo) => {
	const itemText = document.createElement('TEXTAREA');
	itemText.classList.add('todoText');
	itemText.addEventListener('input', function (event) {
		growText();
	});
	itemText.value = todo.name;
	itemText.addEventListener('click', (e) => {
		e.currentTarget.classList.add('active');
	});
	// update todo item when user clicks away
	itemText.addEventListener('blur', (e) => {
		todo.name = e.currentTarget.value;
		renderTodos();
	});
	return itemText;
};

const buildCheckbox = (todo) => {
	const cb = document.createElement('input');
	cb.type = 'checkbox';
	cb.name = 'checkbox';
	cb.classList.add('checkbox');
	cb.checked = todo.completed;
	cb.addEventListener('click', function (e) {
		if (e.target.type === 'checkbox') {
			todo.completed = e.currentTarget.checked;
			e.target.parentElement.classList.toggle('checked');
		}
	});
	return cb;
};

const buildDeleteButton = (todo) => {
	const deleteButton = document.createElement('button');
	deleteButton.className = 'delete-button';
	deleteButton.innerText = 'x';
	deleteButton.addEventListener('click', function (e) {
		const div = this.parentElement;
		div.style.display = 'none';
		todos = todos.filter((item) => item.id !== todo.id);
	});
	return deleteButton;
};
