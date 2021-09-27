// Types
import * as types from './types';

export const setWeathers: types.SetWeathersContract = (...args) => {
    const [ , action ] = args;

    return { ...action.payload, currentWeather: action.payload.data[ 0 ] };
};

export const setCurrentWeather: types.SetWeathersContract = (...args) => {
    const [ , action ] = args;

    return { ...action.payload, currentWeather: action.payload.currentWeather };
};
