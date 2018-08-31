import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// helper function to update inside array
// const updateObjectInArray = (array, action) => {
//   return array.map((item, index) => {
//     if (index !== action.index) {
//       // This isn't the item we care about - keep it as-is
//       return item;
//     }
//     // Otherwise, this is the one we want - return an updated value
//     return {
//       ...item,
//       ...action.item
//     };
//   });
// };
// async fetch function
const asyncFetched = (state = {}, action) => {
  switch (action.type) {
    case 'FETCHED DATA':
      return action.data;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ asyncFetched });

// Create redux state store and pass state function variable. Second argument listens for redux devtools
export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk) // has to be last
);
