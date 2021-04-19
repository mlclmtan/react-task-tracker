import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([ //[item, mutation fun]
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => { //every press, one item filtered (array)
      return task.id !== id;
    }));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => {
      return task.id === id ? { ...task, reminder: !task.reminder } : task;
    }));
  };

  const name = 'Malcolm';
  const thisYear = new Date().getFullYear();

  return (
    <div className="Container">
      <Header myname={name} year={thisYear} />
      <AddTask/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Task to show')} {/*jsx logic inside {}, wrap html in ()*/}
    </div>
  );
}

export default App;
