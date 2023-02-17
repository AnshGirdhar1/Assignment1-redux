import axios from "axios";
import {
  GET_COFFEE_DATA_ERROR,
  GET_COFFEE_DATA_LOADING,
  GET_COFFEE_DATA_SUCCESS,
  GET_EMPLOYEE_DATA_ERROR,
  GET_EMPLOYEE_DATA_LOADING,
  GET_EMPLOYEE_DATA_SUCCESS,
  GET_RESTAURANT_DATA_ERROR,
  GET_RESTAURANT_DATA_LOADING,
  GET_RESTAURANT_DATA_SUCCESS,
} from "./actionType";

export const getCoffeeData = () => async (dispatch) => {
  dispatch({
    type: GET_COFFEE_DATA_LOADING,
    payload: true,
  });
  try {
    const res = await axios.get(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee"
    );
    dispatch({
      type: GET_COFFEE_DATA_SUCCESS,
      payload: res.data.data,
    });
  } catch (e) {
    dispatch({
      type: GET_COFFEE_DATA_ERROR,
      payload: true,
    });
  } finally {
    dispatch({
      type: GET_COFFEE_DATA_LOADING,
      payload: false,
    });
  }
};

export const getRestaurantData = () => async (dispatch) => {
  dispatch({
    type: GET_COFFEE_DATA_LOADING,
    payload: true,
  });
  try {
    const res = await axios.get(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants"
    );
    dispatch({
      type: GET_RESTAURANT_DATA_SUCCESS,
      payload: res.data.data,
    });
  } catch (e) {
    dispatch({
      type: GET_RESTAURANT_DATA_ERROR,
      payload: true,
    });
  } finally {
    dispatch({
      type: GET_RESTAURANT_DATA_LOADING,
      payload: false,
    });
  }
};

export const getEmployeeData = () => async (dispatch) => {
  dispatch({
    type: GET_EMPLOYEE_DATA_LOADING,
    payload: true,
  });
  try {
    const res = await axios.get(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees"
    );
    dispatch({
      type: GET_EMPLOYEE_DATA_SUCCESS,
      payload: res.data.data,
    });
  } catch (e) {
    dispatch({
      type: GET_EMPLOYEE_DATA_ERROR,
      payload: true,
    });
  } finally {
    dispatch({
      type: GET_COFFEE_DATA_LOADING,
      payload: false,
    });
  }
};
