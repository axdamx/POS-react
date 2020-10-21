export const CREATE_ORDER = "CREATE_ORDER";
export const CLEAR_ORDER = "CLEAR_ORDER";

export const createOrder = (order) => ({
  type: CREATE_ORDER,
  payload: {
    order,
  },
});

export const clearOrder = () => ({
  type: CLEAR_ORDER,
});

const initialState = {
  order: [],
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        order: [...state.order, action.payload.order],
      };
    case CLEAR_ORDER:
      return {
        ...state,
        order: [],
      };
    default:
      return state;
  }
}
