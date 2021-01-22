import {useState} from 'react';
import Header from './components/Header';
import Task from './components/Tasks';


const App = () => {
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

  return (
    <div className="container">
      <Header />
      { tasks.length <= 0 ? ('Nothing to Show ') : (<Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)}
    </div>
  );
};

export default App;
