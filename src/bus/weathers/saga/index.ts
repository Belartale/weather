// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import * as types from './types';

// // Workers
import {
    fetchWeathers,
} from './workers';

function* watchFetchWeathers(): SagaIterator {
    yield takeEvery(types.FETCH_WEATHERS_ASYNC, fetchWeathers);
}

export function* watchWeathers(): SagaIterator {
    yield all([ call(watchFetchWeathers) ]);
}
