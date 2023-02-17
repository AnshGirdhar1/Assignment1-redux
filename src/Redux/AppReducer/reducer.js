import * as types from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  coffeeData: [],
  restaurantData: [],
  employeeData: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_COFFEE_DATA_SUCCESS: {
      return {
        ...state,
        coffeeData: payload,
      };
    }
    case types.GET_COFFEE_DATA_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case types.GET_COFFEE_DATA_ERROR: {
      return {
        ...state,
        isError: payload,
      };
    }
    case types.GET_RESTAURANT_DATA_SUCCESS: {
      return {
        ...state,
        restaurantData: payload,
      };
    }
    case types.GET_RESTAURANT_DATA_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case types.GET_RESTAURANT_DATA_ERROR: {
      return {
        ...state,
        isError: payload,
      };
    }
    case types.GET_EMPLOYEE_DATA_SUCCESS: {
      return {
        ...state,
        employeeData: payload,
      };
    }
    case types.GET_EMPLOYEE_DATA_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case types.GET_EMPLOYEE_DATA_ERROR: {
      return {
        ...state,
        isError: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
