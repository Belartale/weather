//! Core
import { call, put/* , select */ } from 'redux-saga/effects';


//! Redux
import { weathersActions } from '../../slice';
import { togglerCreatorAction } from '../../../client/togglers';

//! Tools
import * as API from '../api';
// import { makeRequest } from '../../../../tools/utils';

//! Types
// import { FetchWeathersActionAsync } from '../types';
import { ArrayWeathers as Days } from '../../types';
// import { RootState } from '../../../../init/redux';

export function* fetchWeathers(/* { payload }: FetchWeathersActionAsync */) {
    // console.log('🚀payload', payload);
    try {
        yield put(togglerCreatorAction({
            type:  'isWeathersFetching',
            value: true,
        }));

        // const togglers = yield select<(store: RootState) => RootState>(store) => store.togglers;

        // console.log('🚀togglers', togglers);

        const result: Days = yield call(API.fetchWeathers);

        yield put(weathersActions.setWeathers(result));
        yield put(weathersActions.setCurrentWeatherReducer(result[ 0 ]));
    } catch (error) {
        console.log('🚀error', error);
    } finally {
        yield put(togglerCreatorAction({
            type:  'isWeathersFetching',
            value: false,
        }));
    }
}
