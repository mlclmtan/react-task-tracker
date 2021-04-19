import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

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

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]); //return new array of task
  }

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
      { showAddTask && <AddTask onAdd={addTask}/>} {/* if showAddTask true, show form, &&without else */}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Task to show')} {/*jsx logic inside {}, wrap html in ()*/}
    </div>
  );
}

export default App;
