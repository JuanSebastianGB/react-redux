import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/counter/Counter';
import Theory from './components/theory/Theory';

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: 'center' }}>
        <Counter />
        <hr />
        <Theory />
      </div>
    </Provider>
  );
}

export default App;
