//! Core
import { all } from 'redux-saga/effects';

//! Instruments
import { watchWeathers } from '../../bus/weathers/saga';

export function* rootSaga() {
    yield all([ watchWeathers() ]);
}
