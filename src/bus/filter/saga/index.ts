// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

// // Workers
import {
    fetchWeathers,
    setCurrentWeather,
} from './workers';

function* watchFetchWeathers(): SagaIterator {
    yield takeEvery(types.FETCH_WEATHERS_ASYNC, fetchWeathers); //? доб. effects, а второй аргум мы fetch
}

// function* watchSetCurrentWeather(): SagaIterator {
//     yield takeEvery(types.SET_CURRENT_WEATHERS_ASYNC, setCurrentWeather); //? доб. effects, а второй аргум мы fetch
// }

export function* watchWeathers(): SagaIterator {
    yield all([ call(watchFetchWeathers) ]);
}
