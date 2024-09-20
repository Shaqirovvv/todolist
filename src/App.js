import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { createTask, deleteTask, togglePriority, updateTask } from './todosSlice';
import './styles.css'; 

const TodoApp = () => {
  const [text, setText] = useState('');
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text) {
      dispatch(createTask({ id: Date.now(), description: text, important: false }));
      setText('');
    }
  };

  return (
    <div className="container">
      <h1>Список задач</h1>
      <div>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Введите задачу" />
        <button onClick={handleAdd}>Добавить</button>
      </div>
      {tasks.map(task => (
        <div key={task.id} className={`todo-item ${task.important ? 'important' : ''}`}>
          <span>{task.description}</span>
          <div>
            <button onClick={() => dispatch(togglePriority(task.id))}>
              {task.important ? 'Убрать важность' : 'Сделать важным'}
            </button>
            <button onClick={() => dispatch(deleteTask(task.id))}>Удалить</button>
            <button onClick={() => dispatch(updateTask({ id: task.id, description: prompt('Измените задачу:', task.description) }))}>
              Изменить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);

export default App;
