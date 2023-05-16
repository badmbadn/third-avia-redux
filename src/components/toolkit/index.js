// import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import toolkitSlice from './reduser';

// const rootReduser = combineReducers({
//   toolkit: toolkitSlice,
// });

// const store = configureStore({
//   reducer: rootReduser,
// });
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import filterReduser from './filterReduser';
import asyncReduser from './asyncReduser';

const store = configureStore({
  reducer: {
    filter: filterReduser,
    data: asyncReduser,
  },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
