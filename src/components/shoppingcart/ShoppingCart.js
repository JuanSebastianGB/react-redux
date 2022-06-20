import { useSelector } from 'react-redux';
import ProductItem from '../productitem/ProductItem';
import ProductCart from '../productcart/ProductCart';

const ShoppingCart = () => {
  const state = useSelector(state => state);
  const { shoppingCart } = state;
  console.log(shoppingCart.products);
  return (
    <div>
      <h2>ShoppingCart</h2>
      <h3>Products</h3>
      <article className='box grid-responsive'>
        {shoppingCart.products.map(data => (
          <ProductItem
            key={data.id}
            data={data}
          />
        ))}
      </article>
      <h3>Cart</h3>
      <article className='box grid-responsive'>
        {shoppingCart.cart.map((data, key) => (
          <ProductCart
            key={key}
            data={data}
          />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
