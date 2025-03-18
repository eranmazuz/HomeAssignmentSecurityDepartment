import './App.css';
import { useDispatch, useSelector} from 'react-redux';
import { action } from './store';
function App() {
  const counter = useSelector((state) => state.counter);
  const dispach = useDispatch();
  const increment = () => {
    dispach(action.increment());
  }
  
  const decrement = () => {
    dispach(action.decrement());

  }

  const byVal = () => {
    dispach(action.addBy(10));
  }
  return (
    <div>
     <h1>Counter app</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={byVal}>by val</button>
    </div>
  );
}

export default App;
