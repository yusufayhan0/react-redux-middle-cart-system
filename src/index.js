import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/root/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './redux/reducers/configureStore';
import { Provider } from 'react-redux';
import "alertifyjs/build/css/alertify.min.css"
import {BrowserRouter} from "react-router-dom"

const store = configureStore()


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


