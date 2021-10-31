import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="App">
        <Counter name="This is fist counter!" start_number={0} />
        <Counter name="This is second counter!" start_number={10} />
      </div>
  );
}

export default App;
