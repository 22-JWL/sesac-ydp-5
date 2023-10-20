import Card from './components/Card';
import Student from './components/Students';
import TodoList from './components/TodoList';

function App() {
  const handleClick = (name: string, grade: number) => {
    console.log(`안녕 난 ${name}이고, ${grade}학년이야!`);
  };
  return (
    <div className="App">
      <Student name="새싹" grade={3} handleClick={handleClick} />
      <Student name="새싹" grade={3} part="CS" handleClick={handleClick} />
      <Student name="새" grade={3} part="CS" handleClick={handleClick} />

      <Card title="오늘 배울 것은?">
        <h1>TypeScript with React</h1>
      </Card>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
//Github, MySQL, React
