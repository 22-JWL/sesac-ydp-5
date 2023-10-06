import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallBackEx2';
import UseMemoEx from './components/UseMemoEx';
import UseReducerEx from './components/UseReducer.Ex';
import useTitle from './hooks/UseTitle';
import UseToogle from './hooks/useToogle';

function App() {
  useTitle('React Hooks 연습중입니당');

  return (
    <div className="App">
      <UseMemoEx />
      <hr />

      <UseCallbackEx />
      <hr />

      <UseCallbackEx2 postId={7} />
      <hr />

      <UseReducerEx />
      <hr />

      <UseToogle />
    </div>
  );
}

export default App;
