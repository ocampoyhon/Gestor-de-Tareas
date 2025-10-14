let tasks = [];
let currentFilter = 'all';

// Cargar tareas desde localStorage
window.onload = () => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }
  renderTasks();
  updateStats();
};

// Validación para el nombre de la tarea (solo letras y números)
document.getElementById("taskName").addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\s]/g, '');
});

// Validación para la categoría (solo letras)
document.getElementById("taskCategory").addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, '');
});

// Agregar nueva tarea
document.getElementById("addTask").addEventListener("click", addTask);
document.getElementById("taskName").addEventListener("keypress", (e) => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const name = document.getElementById("taskName").value.trim();
  const type = document.getElementById("taskType").value;
  const category = document.getElementById("taskCategory").value.trim();

  if (!name) {
    alert("¡Debes escribir el nombre de tu tarea!");
    return;
  }

  const task = {
    id: Date.now(),
    name,
    type,
    category: category || "General",
    completed: false,
    createdDate: new Date().toLocaleDateString()
  };

  tasks.push(task);
  saveTasks();
  renderTasks();
  updateStats();

  document.getElementById("taskName").value = "";
  document.getElementById("taskCategory").value = "";
  document.getElementById("taskName").focus();
}

// Guardar en localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Renderizar tareas
function renderTasks() {
  const typeOrder = { 
    "Examen": 1, 
    "Exposicion": 2, 
    "Proyecto": 3, 
    "Tarea": 4, 
    "Lectura": 5,
    "Estudio": 6
  };
  let filteredTasks = [...tasks];

  if (currentFilter === 'completed') {
    filteredTasks = tasks.filter(t => t.completed);
  } else if (currentFilter === 'pending') {
    filteredTasks = tasks.filter(t => !t.completed);
  }

  filteredTasks.sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  if (filteredTasks.length === 0) {
    let message = '🎉 ¡No hay tareas aquí!';
    if (currentFilter === 'completed') {
      message = '📚 Aún no has completado ninguna tarea. ¡Ánimo!';
    } else if (currentFilter === 'pending') {
      message = '✨ ¡Genial! No tienes tareas pendientes.';
    }
    list.innerHTML = `<div class="empty-state">${message}</div>`;
    return;
  }

  filteredTasks.forEach(task => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      <div class="task-info">
        <span class="task-name">${task.name}</span>
        <span class="task-details">
          <span class="type-badge type-${task.type}">${task.type}</span>
          <span class="category-tag">${task.category}</span>
        </span>
      </div>
      <div class="task-actions">
        <button class="btn-complete" onclick="toggleTask(${task.id})" title="${task.completed ? 'Marcar como pendiente' : 'Marcar como completada'}">✓</button>
        <button class="btn-delete" onclick="deleteTask(${task.id})" title="Eliminar tarea">×</button>
      </div>
    `;
    list.appendChild(li);
  });
}

// Completar tarea
function toggleTask(id) {
  tasks = tasks.map(task => 
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
  renderTasks();
  updateStats();
}

// Eliminar tarea
function deleteTask(id) {
  const task = tasks.find(t => t.id === id);
  if (confirm(`¿Estás seguro de eliminar la tarea "${task.name}"?`)) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
    updateStats();
  }
}

// Actualizar estadísticas
function updateStats() {
  const total = tasks.length;
  const pending = tasks.filter(t => !t.completed).length;
  const completed = tasks.filter(t => t.completed).length;
  
  document.getElementById('totalTasks').textContent = total;
  document.getElementById('pendingTasks').textContent = pending;
  document.getElementById('completedTasks').textContent = completed;
  
  // Calcular porcentaje de progreso
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  
  if (progressBar && progressText) {
    progressBar.style.width = percentage + '%';
    progressText.textContent = percentage + '%';
  }
}

// Filtros
document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

document.getElementById("filterAll").addEventListener("click", () => {
  currentFilter = 'all';
  renderTasks();
});

document.getElementById("filterCompleted").addEventListener("click", () => {
  currentFilter = 'completed';
  renderTasks();
});

document.getElementById("filterPending").addEventListener("click", () => {
  currentFilter = 'pending';
  renderTasks();
});