import logo from './logo.svg';
import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <FunctionComponent name="영등포 새싹" />
      <FunctionComponent />
      <hr />
      <ClassComponent name="새싺" />
      <hr />
      <Button link="https://www.google.com">Google</Button>
    </div>
  );
}

export default App;
