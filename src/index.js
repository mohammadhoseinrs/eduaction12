import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, useLocation } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas, fab);
const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <Wrapper>
        <App />
     </Wrapper>
     </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
