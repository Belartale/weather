//! Instruments
import * as types from './types';
import { Weather } from '../types';

export const fetchWeatherActionAsync: types.FetchWeathersContract = () => ({
    type: types.FETCH_WEATHERS_ASYNC,
});

export const setCurrentWeatherActionAsync: types.SetCurrentWeathersContract = (payload: Weather) => ({
    type: types.SET_CURRENT_WEATHERS_ASYNC,
    payload,
});

