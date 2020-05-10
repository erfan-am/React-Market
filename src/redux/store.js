import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './root-reducer';
import { persistStore} from 'redux-persist';
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store =createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export const persistor=persistStore(store);

export default  {store,persistor}