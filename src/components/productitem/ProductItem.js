import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/shoppingCartActions';
import './productItem.css';

const ProductItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, price } = data;
  return (
    <div className='productItem'>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={() => dispatch(addToCart(id))}>+</button>
    </div>
  );
};

/* A way to validate the props that are passed to the component. */
ProductItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default ProductItem;
