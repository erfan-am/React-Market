import {all,call} from 'redux-saga/effects';
import {fetchcollectionsStart} from './PhotoItem/shop/shop-saga';
import {userSaga} from './user/user-saga'

export default function* rootSaga(){
    yield all([
        call(fetchcollectionsStart),
        call(userSaga)
    ])
}