import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import tokenReducer from './reducer/tokenReducer';
import UIReducer from './reducer/uiReducer';

export default createStore(
  combineReducers({
    token: tokenReducer,
    title: UIReducer
  }),
  applyMiddleware(
    thunkMiddleware
  )
)