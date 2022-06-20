import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../actions/shoppingCartActions';
import './productCart.css';

const ProductCart = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, price, quantity } = data;
  return (
    <div className='productCart'>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <button onClick={() => dispatch(removeFromCart(id))}>Delete One</button>
      <button onClick={() => dispatch(removeFromCart(id, true))}>
        Delete All
      </button>
    </div>
  );
};

/* A validation of the props that are passed to the component. */
ProductCart.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProductCart;
