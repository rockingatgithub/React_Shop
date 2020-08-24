export const ALL_PRODUCTS = 'ALL_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const ADD_PRODUCT_TO_LIST = 'ADD_PRODUCT_TO_LIST';
export const SORT_PRODUCT = 'SORT_PRODUCT';
export const UNSORT_PRODUCT = 'UNSORT_PRODUCT';

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}

export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    product,
  };
}

export function allProductsList() {
  return function (dispatch) {
    const url = `https://my-json-server.typicode.com/rockingatgithub/e_commerce_data/posts`;
    // console.log('I ran');
    fetch(url)
      .then((response) => response.json())
      .then((products) => {
        console.log('product', products);
        dispatch(addProductsList(products));
      });
  };
}

export function addProductsList(products) {
  //   console.log(products);
  return {
    type: ALL_PRODUCTS,
    products,
  };
}

export function deleteProduct(product) {
  return {
    type: REMOVE_PRODUCT,
    product,
  };
}

export function addProductToList(product) {
  return function (dispatch) {
    const postMethod = {
      method: 'POST', // Method itself
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json', // Indicates the content
      },
      body: JSON.stringify(product),
      // No need to have body, because we don't send nothing to the server.
    };
    const url = `https://my-json-server.typicode.com/rockingatgithub/e_commerce_data/posts`;
    fetch(url, postMethod)
      .then((response) => response.json())
      .then((product) => {
        console.log(product + ' ' + url);
        dispatch(addProductToTheList(product));
      })
      .catch((err) => console.log(err));
  };
}
export function addProductToTheList(product) {
  return {
    type: ADD_PRODUCT_TO_LIST,
    product,
  };
}

export function sortProductList() {
  return {
    type: SORT_PRODUCT,
  };
}

export function unSortProductList() {
  return {
    type: UNSORT_PRODUCT,
  };
}
