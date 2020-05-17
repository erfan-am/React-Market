import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './root-reducer';
import { persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk'
import rootSaga from './root-saga'
const composeEnhancers =process.env.NODE_ENV==='development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;
const saga=createSagaMiddleware()
export const store =createStore(rootReducer,composeEnhancers(applyMiddleware(thunk,saga)))
export const persistor=persistStore(store);
saga.run(rootSaga)

export default  {store,persistor}