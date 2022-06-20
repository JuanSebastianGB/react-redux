import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/counter/Counter';
import Theory from './components/theory/Theory';
import ShoppingCart from './components/shoppingcart/ShoppingCart';

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: 'center' }}>
        <ShoppingCart />
        <hr />
        <Counter />
        <hr />
        <Theory />
      </div>
    </Provider>
  );
}

export default App;
