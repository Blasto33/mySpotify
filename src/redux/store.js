import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import authReducer from './reducer/tokenReducer';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export default createStore(
  combineReducers({
    token: authReducer,
    //title: UIReducer
  }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)