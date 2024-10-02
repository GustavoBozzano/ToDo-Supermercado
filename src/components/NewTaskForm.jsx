import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewTaskForm = ({ addTask }) => {
  const [newTaskText, setNewTaskText] = useState('');

  const reloaded = () => {
    localStorage.clear();
    location.reload();
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        // Creamos un objeto con los datos del nuevo item que queremos añadir
        const newTask = {
          id: uuidv4(),
          text: newTaskText,
          done: false,
        };

        // Añadimos el nuevo item al estado
        addTask(newTask);

        // Vaciamos el input después de añadir el item
        setNewTaskText('');
      }}
    >
      <label htmlFor="newTask">Nuevo Item:</label>
      <input
        id="newTask"
        maxLength="100"
        required
        value={newTaskText}
        onChange={(event) => {
          setNewTaskText(event.target.value);
        }}
      />
      <div className="buttons">
        <button>Agregar Item</button>
        <button onClick={reloaded}>Limpiar Listado</button>
      </div>
    </form>
  );
};

export default NewTaskForm;
