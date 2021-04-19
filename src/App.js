import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

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

  const name = 'Malcolm';
  const thisYear = new Date().getFullYear();

  return (
    <div className="Container">
      <Header myname={name} year={thisYear} />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
