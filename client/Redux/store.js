import thunk from 'redux-thunk';
import rootReducer from './Reducer/rootReducer';
import { createStore, applyMiddleware } from 'redux';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}