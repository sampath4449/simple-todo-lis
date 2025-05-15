function addTask() {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();
  if (task === '') return;

  const ul = document.getElementById('todo-list');
  const li = document.createElement('li');
  li.textContent = task;
  
  // Toggle completed on click
  li.onclick = () => li.classList.toggle('completed');

  ul.appendChild(li);
  input.value = '';
}
