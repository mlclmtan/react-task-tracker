import { useState, useEffect } from 'react'; //useEffect happends when pageload
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]); //[item, mutation fun]

  useEffect(() => {
    //when pageload
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks(); //run function
  }, []); //[]dependency array ???

  //Fetch Tasks
  const fetchTasks = async () => {
    //async function
    
    // local json server
    // const res = await fetch('http://localhost:5000/tasks');

    // myjsonserver after uploading to github
    const res = await fetch('https://my-json-server.typicode.com/mlclmtan/react-task-tracker/tasks');

    const data = await res.json();

    return data;
  };

  //Fetch Task
  const fetchTask = async (id) => {
    //async function
    const res = await fetch(`https://my-json-server.typicode.com/mlclmtan/react-task-tracker/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  //Add Task
  const addTask = async (task) => {
    //array return from addtask component as task
    const res = await fetch(`https://my-json-server.typicode.com/mlclmtan/react-task-tracker/tasks/`, {
      //onAdd post data to httpreq
      method: 'POST',
      headers: {
        'Content-type': 'application/json', //in json mode
      },
      body: JSON.stringify(task), //in json
    });

    const data = await res.json(); //need await or else frontend wont update data
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]); //return new array of task
  };

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`https://my-json-server.typicode.com/mlclmtan/react-task-tracker/tasks/${id}`, {
      method: 'DELETE',
    });
    setTasks(
      tasks.filter((task) => {
        //every press, one item filtered (array)
        return task.id !== id;
      })
    );
  };

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id); //get that one task from API
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }; //change it, with full content for later update

    const res = await fetch(`https://my-json-server.typicode.com/mlclmtan/react-task-tracker/tasks/${id}`, {
      method: 'PUT', //update it
      header: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json(); //get it's new updated data

    setTasks(
      tasks.map((task) => {
        //change state if id (updated task) if match
        return task.id === id ? { ...task, reminder: !data.reminder } : task;
      })
    );
  };

  const name = 'Malcolm';
  const thisYear = new Date().getFullYear();

  return (
    <Router>
      {/* if wanna use router */}
      <div className='Container'>
        <Header
          myname={name}
          showAdd={showAddTask}
          onAdd={() => setShowAddTask(!showAddTask)}
        />
        
        {/* if path /, will show this template */}
        {/* exact only match /, but not /about or /xxxx */}
        {/* render directly inside <> </>, or use component */}
        <Route
          path='/'
          exact
          render={(props) => ( //use () for code
            <>
              {showAddTask && <AddTask onAdd={addTask} />}{' '}
              {/* if showAddTask true, show form, &&without else */}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No Task to show'
              )}
              {/*jsx logic inside {}, wrap html in ()*/}
            </>
          )}
        />
        <Route path='/about' component={About} />{/* show component only if path is about */}
        <Footer year={thisYear}/>
      </div>
    </Router>
  );
}

export default App;
