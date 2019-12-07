import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { StoreState } from './reducer/index';

import playerInfoReducer from './reducer/playerInfo';

const rootReducer = combineReducers<StoreState>({
  playerInfo: playerInfoReducer,
});

export default (initialState: any) => createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk),
);
