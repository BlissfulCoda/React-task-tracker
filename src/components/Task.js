const tasks = [
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
];

const Task = () => {
  return (
    <>
      {tasks.map(task => (
        <h1 key={task.id}>{task.text}</h1>
      ))}
    </>
  );
};

export default Task;
