const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById ('addTaskBtn');
const taskList = docment.getElementById('taskList');

function createTask () {
    const li = document.createElement('li');
    const checkbox = document.createElement ('input');
    const taskText = document.createElement ('span');
    const deleteBtn = document.createElement ('button');

    checkbox.typee = 'checkbox';
    deleteBtn.innerText ='Detete';

    deteleBtn.addEventListener('click', function ( {
        li.remove();
    }));
}
li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(deleteBtn);

  
  taskText.innerText = taskInput.value;

  
  taskList.appendChild(li);

  
  taskInput.value = '';
}


addTaskBtn.addEventListener('click', function() {
  if (taskInput.value.trim() !== '') {
    createTask();
  } else {
    alert('Please enter a task!');
  }
});