//! Instruments
import * as types from './types';

export const fetchWeatherActionAsync: types.FetchWeathersContract = () => ({
    type: types.FETCH_WEATHERS_ASYNC,
});

