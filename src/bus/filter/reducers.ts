//! Types
import * as types from './types';

type TypeAction = {
    payload: types.Weather
};

//! Reducers
export const setWeathers: types.SetWeathersContract = (...args) => {
    const [ , action ] = args;

    return { ...action.payload, currentWeather: action.payload.data[ 0 ] };
};

export const setCurrentWeatherReducer: any = (state: types.WeathersState, action: TypeAction) => {
    state.currentWeather = action.payload;
};
