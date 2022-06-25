const task = document.getElementById('task');
const plus = document.getElementById('plus');
const ex = document.getElementById('ex');

task.addEventListener("keydown", e => {
	if(e.key == "Enter") {
		if(task.value != 0) {
			register(task)
		} else {
			alert("Oops! Can you repeat?");
		}
	} else {
		return false
	}
})

plus.addEventListener("click", e => {
		if(task.value != 0) {
			register(task);
		} else {
			alert("Oops! Can you repeat?");
		}
	});

const register = task => {
	const checkbox = document.createElement("input");
		checkbox.setAttribute("type", "checkbox");
		checkbox.setAttribute("onclick", "done(this)")
	const para = document.createElement("p");
		para.innerText = task.value;
	const button = document.createElement("button");
		button.setAttribute("class", "ex");
		button.setAttribute("onclick", "remove(this)");
	const div = document.createElement("div");
		div.setAttribute("class", "item");
		div.append(checkbox, para, button);
	const toDoList = document.getElementById("toDoList");
		toDoList.appendChild(div);

	task.value = "";
}

const remove = task => {
	task = task.parentNode;
	task.remove();
}

const done = task => {
	task = task.parentNode
	if(task.className == "item done") {
		task.classList.remove("done")
		const toDoList = document.getElementById("toDoList");
		toDoList.appendChild(task);
	} else {
		task.classList.add("done")
		const doneList = document.getElementById("doneList");
		doneList.appendChild(task);
	}

}
