//! Core
import { put } from 'redux-saga/effects';

//! Types
import { ArrayWeathers } from '../../types';

//! Sync actions
import { weathersActions } from '../../slice';

//! API
import * as API from '../api';

//! Instruments
import { IControlledError, makeRequest } from '../../../../tools/utils';

export function* fetchWeathers() {
    const combineResult: IControlledError & ArrayWeathers = yield makeRequest<ArrayWeathers>({
        fetcher:          API.fetchWeathers,
        togglerType:      'isWeathersFetching',
        fill:             weathersActions.setWeathers,
        isControlledMode: true,
    });

    if (combineResult?.name === 'ControlledError') {
        console.log(combineResult.errorId);
    } else {
        yield put(weathersActions.setCurrentWeatherReducer(combineResult[ 0 ]));
    }
}
