const addItem = () => {
  const list = document.getElementById('task-list');
  const listItem = document.createElement('li');
  const itemInput = document.createElement('input');
  const itemSpan = document.createElement('span')
  const itemButton = document.createElement('button');
  const inputValue = document.getElementById('input-task').value;

  listItem.setAttribute('class', 'main__list-item');
  itemInput.setAttribute('type', 'checkbox');
  itemInput.setAttribute('class', 'checkbox');
  itemSpan.setAttribute('class', 'task')
  itemButton.setAttribute('class', 'delete-btn');

  itemSpan.innerText = inputValue;
  itemButton.innerText = 'X';
  listItem.append(itemInput,itemSpan,itemButton);
  list.append(listItem);
  itemInput.setAttribute('onclick', 'markItem(this)');
  itemButton.setAttribute('onclick', 'deleteItem(this)');
}

const deleteItem = element => {
  element.parentElement.remove();
  saveItems();
}
// checkbox is not selected after refresh but style is line-through still
const markItem = element => {
  element.nextElementSibling.style.textDecoration = element.checked ? 'line-through' : '';
  element.setAttribute('checked', element.checked);

  saveItems();
}

const getSavedTasks = () => {
  document.getElementById('task-list').innerHTML = JSON.parse(localStorage.getItem('tasks')) || [];
}

const manageTask = () => {
  addItem();
  saveItems();
}

const saveItems = () => {
  const items = document.getElementById('task-list').innerHTML;

  localStorage.setItem('tasks', JSON.stringify(items));
}

window.addEventListener('load', getSavedTasks);

