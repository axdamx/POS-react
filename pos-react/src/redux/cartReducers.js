const DECREASE = "DECREASE";
const INCREASE = "INCREASE";
const REMOVE = "REMOVE";
const ADD_TO_CART = "ADD_TO_CART";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";

export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};

export const increaseAmount = (id) => {
  return { type: INCREASE, payload: { id } };
};

export const decreaseAmount = (id) => {
  return { type: DECREASE, payload: { id } };
};

export const addToCart = (product) => {
  return { type: ADD_TO_CART, payload: { product } };
};

export const clearCart = () => {
  return { type: CLEAR_CART };
};

const initialStore = {
  cart: [],
  total: 0,
  quantity: 0,
};

function cartReducer(state = initialStore, action) {
  if (action.type === ADD_TO_CART) {
    const existinCartItem = state.cart.some(
      (item) => item.id === action.payload.product.id
    );
    if (existinCartItem) {
      let tempCart = state.cart.map((cartItem) => {
        if (action.payload.product.id === cartItem.id) {
          cartItem = { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };
    }
    return { ...state, cart: [...state.cart, action.payload.product] };
  }

  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (action.payload.id === cartItem.id) {
        cartItem = { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (action.payload.id === cartItem.id) {
        cartItem = { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === GET_TOTALS) {
    const total = state.cart
      .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
      .toFixed(2);
    return { ...state, total };
  }

  return state;
}

export default cartReducer;
