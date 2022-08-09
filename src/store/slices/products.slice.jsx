import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      const products = action.payload;
      return products;
    }
  }
});

export const getProductsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://ecommerce-api-react.herokuapp.com/api/v1/products/")
    .then((res) => dispatch(setProducts(res.data.data.products))) // setNews(res.data)
    .finally(() => dispatch(setIsLoading(false)));
};

export const getSearchThunk = searchValue => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${searchValue}`)
    .then((res) => dispatch(setProducts(res.data.data.products))) // setNews(res.data)
    .finally(() => dispatch(setIsLoading(false)));
};

export const getCategoryThunk = id => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`)
    .then((res) => dispatch(setProducts(res.data.data.products))) // setNews(res.data)
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;