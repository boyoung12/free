const byInput = document.querySelector("#byName input");
const byForm =document.querySelector("#byName");
const bybyName = document.querySelector("#byName h3");


function handleUserName(event){
	event.preventDefault();
	const bybyInput = byInput.value;
	localStorage.setItem("myName",bybyInput);
	handleName(bybyInput);
}

function handleName(event){
	const data = new Date();
	const time = data.getHours();
	
	if(time >= 6 && 12 > time) {
		bybyName.innerText = `Hello GOOD morning! ${event}!`;
		byInput.classList.add("hidden");
		
	} else if (time >= 12 && 18 > time){
		bybyName.innerText = `Hello GOOD afternoon! ${event}!`;
byInput.classList.add("hidden");		
	} else if (18 <= time && 23 > time) {
		bybyName.innerText = `Hello GOOD evening! ${event}!`;
		byInput.classList.add("hidden");
	} else {
		bybyName.innerText = `Sleep your helth! ${event}!`;
		byInput.classList.add("hidden");
	}
}

const byGet = localStorage.getItem("myName");


if (byGet == null){
	byInput.classList.remove("hidden");
	byForm.addEventListener("submit", handleUserName);
} else {
	handleName(byGet);
}

