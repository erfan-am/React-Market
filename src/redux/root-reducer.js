import {combineReducers} from 'redux'
import userReducer from './user/user-reducer';
import photoReducer from './PhotoItem/Photo-reducer';
import informReducer from './information/information';
import collectionReducer from '../redux/PhotoItem/shop/shop.data.reducer';
import ModalReducer from './modal/modal-reducer'
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig={
    key:'root',
    storage,
    whitelist:[
        'photo'
    ]
}

const rootReducer=combineReducers({
    user:userReducer,
    photo:photoReducer,
    inform:informReducer,
    shop:collectionReducer,
    modal:ModalReducer
    })
export default persistReducer(persistConfig,rootReducer)