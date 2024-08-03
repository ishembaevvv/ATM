const defaultState = {
  customer: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
const ADD_MANY_CUSTOMER = "ADD_MANY_CUSTOMER";
const REMOVE_ALL = "REMOVE_ALL";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMER:
      //TODO для получение из базы
      return { ...state, customer: [...state.customer, ...action.payload] };
    case ADD_CUSTOMER:
      //! для добавляния
      return { ...state, customer: [...state.customer, action.payload] };
    case REMOVE_CUSTOMER:
      //? для удаления
      return {
        ...state,
        customer: state.customer.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    case REMOVE_ALL:
      return { ...state, customer: [] };
    default:
      return state;
  }
};

//  Рефакторинг
export const addCustomerAction = (payload) => ({
  type: ADD_CUSTOMER,
  payload,
});

export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMER,
  payload,
});

export const addManyCustomer = (payload) => ({
  type: ADD_MANY_CUSTOMER,
  payload,
});

export const removeAllAction = () => ({
  type: REMOVE_ALL,
});
