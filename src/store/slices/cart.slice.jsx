import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";
import getConfig from "../../utils/getConfig"

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCart: (state, action) => {
        const cart = action.payload
        return cart
    }
  }
});

export const getCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .get("https://ecommerce-api-react.herokuapp.com/api/v1/cart" ,getConfig()) //,getConfig()
      .then((res) => dispatch(setCart(res.data.data.cart.products)))
      .finally(() => dispatch(setIsLoading(false)));
  };

  export const addCartThunk = (product) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .post("https://ecommerce-api-react.herokuapp.com/api/v1/cart", product, getConfig())
      .catch(err => console.log(err)) //,getConfig()
      .then(() => dispatch(getCartThunk()))
      .finally(() => dispatch(setIsLoading(false)));
  };

  export const buyCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .post("https://ecommerce-api-react.herokuapp.com/api/v1/purchases", {}, getConfig())
      .catch(err => console.log(err.response))
      .then(() => dispatch(setCart([])))
      .finally(() => dispatch(setIsLoading(false)));
  };

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;