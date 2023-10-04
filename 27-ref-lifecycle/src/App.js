import RefSample2 from './RefSample';
import RefSample3 from './RefSample3';

function App() {
  return (
    <div className="App">
      <RefSample2 />

      {/* 클래스형 컴포넌트; ref 사용방법 1. 콜백함수 */}
      <RefSample3 />
    </div>
  );
}

export default App;
