import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ACTIONS, API, API_CATEGORIES } from "../../helpers/const";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const productContext = createContext();
export const useProducts = () => useContext(productContext);
const INIT_STATE = {
  products: [],
  oneProduct: {},
  categories: [],
};

const reduser = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    case ACTIONS.GET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reduser, INIT_STATE);

  // ! CREATE
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    navigate("/products");
  };
  // ! GET
  const getProducts = async () => {
    const { data } = await axios(API);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };
  // ! DELETE
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };
  // ! GET_ONE_PRODUCT
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: ACTIONS.GET_ONE_PRODUCT,
      payload: data,
    });
  };
  // ! EDIT
  const editProduct = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`, editedProduct);
    navigate("/products");
  };
  // ! GET_CATIGORIES
  const getCategories = async () => {
    const { data } = await axios(API_CATEGORIES);
    dispatch({
      type: ACTIONS.GET_CATEGORIES,
      payload: data,
    });
  };
  // ! CREATE_CATEGORY
  const createCategory = async (newCategory) => {
    await axios.post(API_CATEGORIES, newCategory);
    getCategories();
  };
  const values = {
    products: state.products,
    oneProduct: state.oneProduct,
    categories: state.categories,
    addProduct,
    getProducts,
    deleteProduct,
    getOneProduct,
    editProduct,
    getCategories,
    createCategory,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
