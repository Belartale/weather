//! Types
import { WeathersState } from '../../types';

//! Sync actions
import { weathersActions } from '../../slice';

//! API
import * as API from '../api';

//! Instruments
import { IControlledError, makeRequest } from '../../../../tools/utils';
import { call, put } from 'redux-saga/effects';


//todo params AC setWeahter
export function* setCurrentWeather(actionAsync: any) {
    // yield put(actionAsync);
}
