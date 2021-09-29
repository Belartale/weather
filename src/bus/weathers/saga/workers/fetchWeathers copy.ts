//! Core
import { put } from 'redux-saga/effects';

//! Types
import { ArrayWeathers as Days } from '../../types';

//! Sync actions
import { weathersActions } from '../../slice';

//! API
import * as API from '../api';

//! Instruments
import { makeRequest } from '../../../../tools/utils';

//! Action
import { FetchWeathersActionAsync } from '../types';

export function* fetchWeathers({ payload }: FetchWeathersActionAsync) {
    console.log('🚀payload', payload);

    const result: Days | null = yield makeRequest<Days>({
        fetcher:      API.fetchWeathers,
        togglerType:  'isWeathersFetching',
        succesAction: weathersActions.setWeathers,
    });

    if (result) {
        yield put(weathersActions.setCurrentWeatherReducer(result[ 0 ]));
    }
}
