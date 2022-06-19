import { useDispatch, useSelector } from 'react-redux';
import {
  add,
  add5,
  reset,
  substract,
  substract5,
} from '../../actions/counterActions';
const Counter = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { counter } = state;
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Counter Redux</h2>
      <nav>
        <button onClick={() => dispatch(add5())}>+5</button>
        <button onClick={() => dispatch(add())}>+1</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(substract())}>-1</button>
        <button onClick={() => dispatch(substract5())}>-5</button>
      </nav>
      <h3>{counter}</h3>
      <hr />
    </div>
  );
};

export default Counter;
