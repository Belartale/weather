// Types
import * as types from './types';

export const setWeathers: types.SetWeathersContract = (...args) => {
    const [ , action ] = args;

    return action.payload;
};
