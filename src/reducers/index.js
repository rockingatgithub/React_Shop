import {
  ALL_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
  ADD_PRODUCT_TO_LIST,
  SORT_PRODUCT,
  UNSORT_PRODUCT,
  SHOW_ITEM,
  SHOW_CART,
  SHOW_FULL_CART,
  HIDE_PRODUCT_INFO,
} from '../actions';

import { combineReducers } from 'redux';

const initialProductState = {
  list: [],
  cart: [],
  cartCount: 0,
  showOne: false,
  showOneItem: {},
  showCart: false,
  showAll: true,
};

export function products(state = initialProductState, action) {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        list: action.products,
      };
    case ADD_TO_CART:
      const newCount1 = state.cartCount + 1;
      return {
        ...state,
        cart: [action.product, ...state.cart],
        cartCount: newCount1,
      };
    case REMOVE_FROM_CART:
      const filteredArray = state.cart.filter(
        (product) => product.id !== action.product.id
      );
      const newCount2 = state.cartCount - 1;
      return {
        ...state,
        cart: filteredArray,
        cartCount: newCount2,
      };
    case REMOVE_PRODUCT:
      const filteredArray1 = state.list.filter(
        (product) => product.id !== action.product.id
      );
      const filteredArray2 = state.cart.filter(
        (product) => product.id !== action.product.id
      );
      const newCount3 =
        filteredArray2.length === state.cart.length
          ? state.cartCount
          : state.cartCount - 1;
      return {
        ...state,
        list: filteredArray1,
        cart: filteredArray2,
        cartCount: newCount3,
      };
    case ADD_PRODUCT_TO_LIST:
      return {
        ...state,
        list: [action.product, ...state.list],
      };
    case SORT_PRODUCT:
      function compare(obj1, obj2) {
        if (obj1.price > obj2.price) return 1;
        if (obj1.price < obj2.price) return -1;

        return 0;
      }
      const sortedArray = state.list.sort(compare);
      console.log(sortedArray);
      return {
        ...state,
        list: sortedArray,
      };
    case UNSORT_PRODUCT:
      function compare1(obj1, obj2) {
        if (obj1.id > obj2.id) return 1;
        if (obj1.id < obj2.id) return -1;

        return 0;
      }
      const sortedArray1 = state.list.sort(compare1);
      console.log(sortedArray1);
      return {
        ...state,
        list: sortedArray1,
      };
    case SHOW_ITEM:
      return {
        ...state,
        showOne: true,
        showOneItem: action.product,
        showCart: false,
        showAll: false,
      };
    case SHOW_CART:
      return {
        ...state,
        showCart: true,
        showAll: false,
        // cart: state.cart
      };
    case SHOW_FULL_CART:
      return {
        ...state,
        showCart: false,
        showAll: true,
      };
    case HIDE_PRODUCT_INFO:
      return {
        ...state,
        showOne: false,
        showAll: true,
        showOneItem: {},
      };
    default:
      //   console.log('i did');
      return state;
  }
}

export default combineReducers({
  products,
});
