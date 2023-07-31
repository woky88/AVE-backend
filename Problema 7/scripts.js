document.getElementById('task-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const taskName = document.getElementById('task-name');
  const taskDate = document.getElementById('task-date');
  const taskPriority = document.getElementById('task-priority');
  const taskDescription = document.getElementById('task-description');

  const row = document.createElement('tr');

  row.innerHTML = `
      <td>${taskName.value}</td>
      <td>${taskDate.value}</td>
      <td>${taskPriority.value}</td>
      <td>${taskDescription.value}</td>
      <td>
          <button onclick="editTask(this)">Editar</button>
          <button onclick="deleteTask(this)">Borrar</button>
      </td>
  `;

  document.querySelector('#task-table tbody').appendChild(row);

  taskName.value = '';
  taskDate.value = '';
  taskPriority.value = '';
  taskDescription.value = '';
});

document.getElementById('clear-form').addEventListener('click', function () {
  document.getElementById('task-name').value = '';
  document.getElementById('task-date').value = '';
  document.getElementById('task-priority').value = '';
  document.getElementById('task-description').value = '';
});

function deleteTask(button) {
  button.parentElement.parentElement.remove();
}

function editTask(button) {
  const cells = button.parentElement.parentElement.children;

  document.getElementById('task-name').value = cells[0].textContent;
  document.getElementById('task-date').value = cells[1].textContent;
  document.getElementById('task-priority').value = cells[2].textContent;
  document.getElementById('task-description').value = cells[3].textContent;

  deleteTask(button);
}
