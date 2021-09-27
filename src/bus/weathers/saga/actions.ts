// Instruments
import * as types from './types';

export const fetchWeatherActionAsync: types.FetchWeathersContract = () => ({
    type: types.FETCH_WEATHERS_ASYNC,
});

export const setCurrentWeather: types.SetCurrentWeathersContract = (payload) => ({
    type: types.SET_CURRENT_WEATHERS_ASYNC,
    payload,
});

