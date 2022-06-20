import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from '../types';

const initialState = {
  products: [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
    { id: 5, name: 'Product 5', price: 50 },
    { id: 6, name: 'Product 6', price: 60 },
    { id: 7, name: 'Product 7', price: 70 },
    { id: 8, name: 'Product 8', price: 80 },
    { id: 9, name: 'Product 9', price: 90 },
    { id: 10, name: 'Product 10', price: 100 },
    { id: 11, name: 'Product 11', price: 110 },
  ],
  cart: [],
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const productInProducts = state.products.find(
        item => item.id === action.payload
      );
      const productInCart = state.cart.find(item => item.id === action.payload);

      return productInCart
        ? {
            ...state,
            cart: state.cart.map(item =>
              item.id === productInCart.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...productInProducts, quantity: 1 }],
          };
    }

    case REMOVE_ONE_FROM_CART: {
      const productInCart = state.cart.find(item => item.id === action.payload);
      return productInCart.quantity > 1
        ? {
            ...state,
            cart: state.cart.map(item => {
              if (item.id === action.payload) {
                return { ...item, quantity: item.quantity - 1 };
              }
              return item;
            }),
          }
        : {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
};

export default shoppingCartReducer;
