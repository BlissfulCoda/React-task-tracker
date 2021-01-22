import {useState} from 'react';
import Header from './components/Header';
import Task from './components/Tasks';
import AddTask from './components/AddTask';


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Leg Training at Genesis',
      day: 'Monday 4th 6pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Buy Flowers',
      day: 'Wednesday Eastern Time',
      reminder: false
    },
    {
      id: 3,
      text: 'Cook Dinner',
      day: 'Saturday, 7pm',
      reminder: true
    }
  ])

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = id => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
     { showAddTask && <AddTask onAdd={addTask}/>}
      { tasks.length <= 0 ? ('Nothing to Show ') : (<Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)}
    </div>
  );
};

export default App;
