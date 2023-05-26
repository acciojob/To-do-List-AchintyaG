//your code here
var todoValue= document.getElementById('newTodoInput').value;
var btn = document.getElementById('addTodoBtn');
var ol = document.getElementById('todoList');
 function addTodo() {
	 if(todoValue)
		{
			var list = document.createElement('li');
			list.textContent = todoValue;
			ol.appendChild(li);
			todoValue= "";
		} 	
}
btn.addEventListener('click', addTodo);