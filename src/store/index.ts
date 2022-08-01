import {legacy_createStore as createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';
import {persistStore, persistReducer} from 'redux-persist';
import localStorage from "redux-persist/es/storage";
const storageConfig = {
  key: 'root',
  storage: localStorage,
  blacklist: []
}

const myPersistReducer = persistReducer(storageConfig, rootReducer);
const store = createStore(
    myPersistReducer,
    applyMiddleware(
        thunkMiddleware
    )
);
export const persist = persistStore(store);
export default store;
