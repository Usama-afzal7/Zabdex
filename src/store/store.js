import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { provider, tokens } from './reducers';

const rootReducer = combineReducers({
  provider,
  tokens,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk), // Add thunk middleware
  devTools: process.env.NODE_ENV !== 'production', // Automatically use Redux DevTools if not in production
  // initialState can be added as a part of the `preloadedState` option if needed
  // preloadedState: initialState,
});

export default store;
