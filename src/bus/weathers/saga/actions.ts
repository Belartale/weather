//! Instruments
import * as types from './types';

export const fetchWeatherActionAsync: types.FetchWeathersContract = (payload: number) => ({
    type: types.FETCH_WEATHERS_ASYNC,
    payload,
});

