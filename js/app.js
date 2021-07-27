// select DOM elements
const todoForm = document.querySelector('.todo-form');
const addButton = document.querySelector('.add-button');
const input = document.querySelector('.todo-input');
let messageBox = document.querySelector('#message-box');
const ul = document.getElementById('todoList');

let todos = [];

todoForm.addEventListener('submit', function (e) {
	e.preventDefault();
	addTodo(input.value);
});

var updateHeight = (element) => {
	var scroll_height = element.scrollHeight;
	element.style.height = scroll_height + 'px';
};

messageBox.addEventListener('input', function () {
	updateHeight(this);
});

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
		messageBox.style.height = 'auto';
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
		//update height of textarea
		updateHeight(itemText);
	});
};

const createTodoText = (todo) => {
	const itemText = document.createElement('TEXTAREA');
	itemText.setAttribute('id', 'display-text');
	itemText.classList.add('todoText');
	itemText.addEventListener('input', function () {
		updateHeight(this);
	});
	itemText.value = todo.name;
	//update todo item when user clicks away
	itemText.addEventListener('blur', (e) => {
		todo.name = e.currentTarget.value;
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
