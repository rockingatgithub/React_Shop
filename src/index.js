import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ToastContainer } from 'react-toastify';
import rootReducer from './reducers';
import './index.css';
import App from './components/App';
import 'react-toastify/dist/ReactToastify.css';

const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log('ACTION', action);
  next(action);
};

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    {/* Same as */}
    <ToastContainer />
    <App />
  </Provider>,
  document.getElementById('root')
);
