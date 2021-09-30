//! Types
import * as types from './types';

type TypeAction = {
    payload: types.Weather
};

//! Reducers
export const setWeathers: types.SetWeathersContract = (state, action) => {
    state.data = action.payload;
    state.currentWeather = action.payload[ 0 ];
};

export const setCurrentWeather: types.SetCurrentWeatherContract = (
    state: types.WeathersState, action: TypeAction,
) => {
    state.currentWeather = action.payload;
};

export const setFilteredWeathers: types.SetFilteredWeathersContract = (state, action) => {
    state.data = action.payload;
};
