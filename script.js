//your code here
var todoValue= document.getElementById('newTodoInput');
var btn = document.getElementById('addTodoBtn');
var ol = document.getElementById('todoList');
 function addTodo() {
	 if(todoValue.value)
		{
			var list = document.createElement('li');
			list.textContent = todoValue.value;
			ol.appendChild(li);
			todoValue.value= "";
		} 	
}
btn.addEventListener('click', addTodo);