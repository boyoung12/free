const byToForm = document.querySelector("#todo");
const byToInput = document.querySelector("#todo input");
const byToUl = document.querySelector("#todo-ul");

let toDos = [];

function handleDelted(event) {
	const bydel = event.target.parentElement;
	bydel.remove();
}

function saveTodo(){
	localStorage.setItem("todo", JSON.stringify(toDos));
}


function handleTodo(event){
	event.preventDefault();
	const byToVal = byToInput.value;
	localStorage.setItem("todo", byToVal);
	byToInput.value = "";
	toDos.push(byToVal);
	PaintTodo(byToVal);
	saveTodo();
}

function PaintTodo(newTodo){
	const toLi = document.createElement("li");
	const toSpan = document.createElement("span");
	const toButton = document.createElement("button");
	
	toLi.appendChild(toSpan);
	toLi.appendChild(toButton);
	byToUl.appendChild(toLi);
	
	toSpan.innerText = newTodo;
	toButton.innerText = "❌";
	toButton.addEventListener("click", handleDelted);
}

const savedTodo = localStorage.getItem("todo");

byToForm.addEventListener("submit", handleTodo);

if(savedTodo !== null) {
	const parseToDo = JSON.parse(savedTodo);
	toDos = parseToDo;
	parseToDo.forEach(PaintTodo);
}