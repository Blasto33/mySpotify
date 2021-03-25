import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import tokenReducer from './reducer/tokenReducer';
import artistReducer from './reducer/artistReducer';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export default createStore(
  combineReducers({
    token: tokenReducer,
    artist: artistReducer,
    //title: UIReducer
  }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)