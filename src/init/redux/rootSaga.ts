//! Core
import { all } from 'redux-saga/effects';

//! Instruments
import { watchTodos } from '../../bus/todos/saga';
import { watchMessages } from '../../bus/messages/saga';
import { watchWeathers } from '../../bus/weathers/saga';

export function* rootSaga() {
    yield all([
        watchTodos(),
        watchMessages(),
        watchWeathers(),
    ]);
}
